import { z } from "zod";
export const publicAccountSchema = z.object({
  username: z.string(),
  accountname: z.string(),
  type: z.enum(["PUBLIC", "PRIVATE"]),
  subscription: z
    .object({
      type: z.enum(["USER", "GOVERNMENT", "ORGANIZATION"]),
    })
    .optional(),
  pfp: z.string().url().optional(),
  bio: z.string().optional(),
  followersCount: z.number().optional(),
  followingCount: z.number().optional(),
});

type publicAccountTypeInfer = z.infer<typeof publicAccountSchema>;

export default publicAccountTypeInfer;
