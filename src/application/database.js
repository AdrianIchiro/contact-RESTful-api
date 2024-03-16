import { PrismaClient } from "@prisma/client";
import { logging } from "./logging.js";

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prismaClient.$on("error", (e) => {
  logging.error(e);
});

prismaClient.$on("query", (e) => {
  logging.info(e);
});

prismaClient.$on("info", (e) => {
  logging.info(e);
});

prismaClient.$on("warn", (e) => {
  logging.warn(e);
});
