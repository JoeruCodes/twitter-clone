import { z } from "zod";
import { publicAccountSchema } from "../global_schema/publicAccountSchema";
interface RightSidebarProps {
  disabled?: string[] | string;
  trending: z.infer<typeof trendingArr>;
  toFollow: z.infer<typeof toFollowArr>;
}

export const trendingArr = z
  .array(
    z.object({
      genre: z.string(),
      hashtag: z.string(),
      postNum: z.number(),
    }),
  )
  .length(5);

export const toFollowArr = z.array(publicAccountSchema).length(3);

export default RightSidebarProps;
