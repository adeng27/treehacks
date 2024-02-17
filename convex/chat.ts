import { v } from "convex/values";
import { action, mutation, query } from "./_generated/server";
import openai from "./lib/openai";
import { api } from "./_generated/api";
import { similarInputs } from "./realMessage";
import { ChatCompletionMessageParam } from "openai/resources/index";

export const handleMessage = action({
    args: {
        message: v.string(),
    },
    handler: async (ctx, args) => {
        const similars = await similarInputs(ctx, { input: args.message });

        const justContent: string[] = [];
        for (let i = 0; i < similars.length; i++) {
            const daContent = await ctx.runQuery(api.realMessage.findNextFour, {timeStamp: similars[0].timeStamp});
            for (let j = 0; j < daContent.length; j++) {
                justContent.push(daContent[j].content)
            }
        }

        const temp = await ctx.runQuery(api.chat.getAllEntries);
        const chatMessages = temp.slice(-3);
        

        const systemMessage: ChatCompletionMessageParam = {
            role: "system",
            content: "You are mimicking the user's mom's responses to messages. Text like a human. Don't add extra information. IMPORTANT: make sure you copy their tone and mannerisms. These are some responses that this person might have responded with: " + justContent.map((text) => `${text}`).join(" \n\n")
        }

        const pastChatMessages: ChatCompletionMessageParam[] = [];
        for (let i = 0; i < chatMessages.length; i++) {
            pastChatMessages.push({
                role: "user",
                content: chatMessages[i].input,
            })
            pastChatMessages.push({
                role: "assistant",
                content: chatMessages[i].response,
            })
        }

        pastChatMessages.push(systemMessage);
        pastChatMessages.push({
            role: "user",
            content: args.message
        })


        console.log(pastChatMessages);

        const completion = await openai.chat.completions.create({
            messages: pastChatMessages,
            model: "gpt-3.5-turbo"
        });

        const input = args.message;
        const response = completion.choices[0].message.content ?? "";

        await ctx.runMutation(api.chat.insertEntry, {
            input, 
            response,
        })

        console.log(completion);

        return completion;
    },
});

export const insertEntry = mutation({
    args: {
        input: v.string(),
        response: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("entries", {
            input: args.input,
            response: args.response,
        })
    }
});

export const getAllEntries = query({
    handler: async (ctx) => {
        const entries = await ctx.db.query("entries").collect();
        return entries;
    }
})

export const makeTranscript = action({
    handler: async (ctx) => {
        
        const transcript = await openai.audio.transcriptions.create({
            model: "whisper-1",
            file: await fetch("/treehacks.wav"),
            response_format: "text"
        })
        console.log(transcript);
        return transcript.text;
    }
})