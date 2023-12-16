import { clerkClient, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { TRPCError } from "@trpc/server";
import { string, z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {id: user.id, username: user.username, profilePicture: user.imageUrl}
}

export const postpRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        const posts = await ctx.db.message.findMany({
          take: 100,
        });
        const users = (
          await clerkClient.users.getUserList({
            userId: posts.map((post) => post.authorId),
            limit: 100,
          })
        ).map(filterUserForClient);
        console.log(users)
        return posts.map(post => {
          const author = users.find((user) => user.id === post.authorId);
          if(!author?.username) {
            throw new TRPCError({ 
            code: "INTERNAL_SERVER_ERROR",
            message: "Author for post not found",
          })}
          
          
          return {
          post,
          author,
        }});
    }),

    create: protectedProcedure.input(z.object({
      content: z.string().min(1).max(256),
    })).mutation(async ({ctx, input}) => {
      const user = await currentUser();
      const authorId = user.id;

      const post = await ctx.db.message.create({
        data: {
          authorId,
          content: input.content,
        }
      });

      return post;


    })
});
