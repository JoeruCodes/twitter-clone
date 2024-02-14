import { z } from "zod";
import { publicAccountSchema } from "./publicAccountSchema";
export const tweetReplySchema = z.object({
  id: z.string(),
  refId: z.string().optional(),
  user: publicAccountSchema,
  datetime: z.string(),
  msg: z.string(),
  media: z.string().url().optional(),
  replies: z.number(),
  retweets: z.number(),
  likes: z.number(),
  impressions: z.number(),
  bookmarks: z.number().optional(),
});

export const tweetReplySchemaPROP = z.array(
  z.object({
    id: z.string(),
    refId: z.string().optional(),
    user: publicAccountSchema,
    datetime: z.string(),
    msg: z.string(),
    media: z.string().url().optional(),
    replies: z.number(),
    retweets: z.number(),
    likes: z.number(),
    impressions: z.number(),
    bookmarks: z.number().optional(),
  }),
);

export const tweetReplyQuerySchema = z.object({
  id: z.string(),
  refId: z.string().optional(),
  user: z.string(),
  datetime: z.string(),
  msg: z.string(),
  media: z.string().url().optional(),
  replies: z.number(),
  retweets: z.number(),
  likes: z.number(),
  impressions: z.number(),
  bookmarks: z.number().optional(),
});

export type tweetReplyQuerySchemaInfer = z.infer<typeof tweetReplyQuerySchema>;

type tweetReplySchemaInfer = z.infer<typeof tweetReplySchema>;
export default tweetReplySchemaInfer;
