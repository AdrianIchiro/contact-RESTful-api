import { PrismaClient } from "@prisma/client";
import { logging } from "./logging";

export const PrismaClient = new PrismaClient({
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

PrismaClient.$on("error", (e) => {
  logging.error(e);
});

PrismaClient.$on("query", (e) => {
  logging.info(e);
});

PrismaClient.$on("info", (e) => {
  logging.info(e);
});

PrismaClient.$on("warn", (e) => {
  logging.warn(e);
});
