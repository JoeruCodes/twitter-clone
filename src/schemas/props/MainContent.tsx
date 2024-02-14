import { ReactNode } from "react";
import tweetReplySchemaInfer from "../global_schema/tweetReplySchema";
import { z } from "zod";
interface MainContentProps {
  current: String;
  tweets?: tweetReplySchemaInfer[];
  lists: z.infer<typeof listSchema>;
  children: ReactNode
}

export const listSchema = z
  .array(
    z.object({
      id: z.string(),
      name: z.string(),
      author: z.string().optional(),
    }),
  )
  .length(1);

export default MainContentProps;
