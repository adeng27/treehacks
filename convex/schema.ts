import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  entries: defineTable({
    input: v.string(),
    response: v.string(),
  }),
  realMessages: defineTable({
    fromTarget: v.boolean(),
    content: v.string(),
    timeStamp: v.int64(),
    embedding: v.array(v.float64()),
  }).vectorIndex("by_embedding", {
    vectorField: "embedding",
    dimensions: 1536,
    filterFields: ["fromTarget"],
  })
});