import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getQuotes = async () => {
  const result = await prisma.quotes.findMany({
    orderBy: {
      id: "desc",
    },
    take: 1,
  });

  return {
    data: result,
  };
};

export const addQuote = async (quote: string) => {
  return await prisma.quotes.create({
    data: {
      quote,
    },
  });
};
