import { v } from "convex/values";
import { action, internalQuery, mutation, query } from "./_generated/server";
import { internal, api } from "./_generated/api";

export type SearchResult = {
    fromTarget: boolean,
    content: string,
    timeStamp: bigint,
  };

export const handleMessageSubmit = action({
    args: {
        fromTarget: v.boolean(),
        content: v.string(),
        timeStamp: v.int64(),
    },
    handler: async (ctx, args) => {
        const embedding = await embed(args.content);
        await ctx.runMutation(api.realMessage.insertMessage, {
            fromTarget: args.fromTarget,
            content: args.content,
            timeStamp: args.timeStamp,
            embedding: embedding,
        })
    }
})

export const insertMessage = mutation({
    args: {
        fromTarget: v.boolean(),
        content: v.string(),
        timeStamp: v.int64(),
        embedding: v.array(v.number()),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("realMessages", {
            fromTarget: args.fromTarget,
            content: args.content,
            timeStamp: args.timeStamp,
            embedding: args.embedding,
        })
    }
})

export async function embed(text: string): Promise<number[]> {
    const key = process.env.REACT_APP_OPENAI_API_KEY;
    if (!key) {
      throw new Error("OPENAI_KEY environment variable not set!");
    }
    const req = { input: text, model: "text-embedding-ada-002" };
    const resp = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(req),
    });
    if (!resp.ok) {
      const msg = await resp.text();
      throw new Error(`OpenAI API error: ${msg}`);
    }
    const json = await resp.json();
    const vector = json["data"][0]["embedding"];
    console.log(`Computed embedding of "${text}": ${vector.length} dimensions`);
    return vector;
  }

export const similarInputs = action({
  args: {
    input: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Generate an embedding from you favorite third party API:
    const embedding = await embed(args.input);
    // 2. Then search for similar realMessages!
    const results = await ctx.vectorSearch("realMessages", "by_embedding", {
      vector: embedding,
      limit: 16,
      filter: (q) => q.eq("fromTarget", true),
    });

    const messages: SearchResult[] = await ctx.runQuery(
        internal.realMessage.fetchResults,
        // {results}
        { ids: results.map((result) => result._id) },
        // { scores: results.map((result) => result._score) }
      );
      return messages;
  },
});

export const fetchResults = internalQuery({
    args: { ids: v.array(v.id("realMessages")) },
    handler: async (ctx, args) => {
      const results = [];
      for (const id of args.ids) {
        const doc = await ctx.db.get(id);
        if (doc === null) {
          continue;
        }
        results.push(doc);
      }
      return results;
    },
  });

//   export const findNextFour = query({
//     args: {
//         timeStamp: v.int64(),
//     },
//     handler: async (ctx, args) => {
//         const nextFour = ctx.db
//             .query("realMessages")
//             .filter((q) => q.and(q.eq(q.field("fromTarget"), true), 
//                 q.gt(q.field("timeStamp"), args.timeStamp), 
//                 q.lt(q.field("timeStamp"), args.timeStamp + BigInt(5))))
//             .take(4);
//         return nextFour;
//     }
//   })