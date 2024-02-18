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
        const similarsContent: string[] = [];
        for (let i = 0; i < similars.length; i++) {
            similarsContent.push(similars[i].content);
        }
        console.log("similars", similarsContent)

        // const justContent: string[] = [];
        // for (let i = 0; i < similars.length; i++) {
        //     const daContent = await ctx.runQuery(api.realMessage.findNextFour, {timeStamp: similars[0].timeStamp});
        //     for (let j = 0; j < daContent.length; j++) {
        //         justContent.push(daContent[j].content)
        //     }
        // }

        const temp = await ctx.runQuery(api.chat.getAllEntries);
        const chatMessages = temp.slice(-3);
        

        const systemMessage: ChatCompletionMessageParam = {
            role: "system",
            content: "You are acting like Joseph. DO NOT MENTION YOU ARE AN AI. DO NOT ACT LIKE AN AI. BE BRIEF. TEXT CASUALLY WITH LOWERCASE LETTERS. RESPOND TO MESSAGES LIKE JOSEPH. This is how you would respond to the question: \"" + 
            similarsContent.map((text) => `${text}`).join(" \n\n") + "\""
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

        pastChatMessages.push({
            role: "user",
            content: args.message
        })
        pastChatMessages.push(systemMessage);

        console.log(pastChatMessages);

        const completion = await openai.chat.completions.create({
            messages: pastChatMessages,
            model: "gpt-4"
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