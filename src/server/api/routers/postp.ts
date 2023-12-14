import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postpRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.db.postp.findMany();
    })
});
