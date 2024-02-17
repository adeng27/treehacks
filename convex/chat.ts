import { v } from "convex/values";
import { action, mutation, query } from "./_generated/server";
import openai from "./lib/openai";
import { api } from "./_generated/api";
import { similarInputs } from "./realMessage";
// import { ChatCompletionMessageParam } from "openai/resources/";

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

        // const systemMessage: ChatCompletionMessageParam = {
        //     role: "system",
        //     content: "You are mimicking a certain person's responses to messages." + 
        //         "These are some responses that this person might have responded with: " +
        //         justContent.map((text) => `${text}`).join("\n\n")
        // }

        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system",
                content: "You are mimicking a certain person's responses to messages." + 
                    "These are some responses that this person might have responded with: " +
                    justContent.map((text) => `${text}`).join("\n\n")
            }, {role: "user", content: args.message}],
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