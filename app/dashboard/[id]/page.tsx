import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Hero from "@/components/hero-07/hero-07";

export default async function Quote({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quotes = await prisma.quotes.findUnique({
    where: { id: parseInt(id) },
  });
  if (!quotes) {
    notFound();
  }

console.log(quotes)
  return (
    <Hero
      quote={quotes.quote}
      kind={quotes.kind}
    />
  );
}
