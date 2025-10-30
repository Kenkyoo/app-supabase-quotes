import { connection } from "next/server";
import prisma from "@/lib/prisma";
import { QuoteKind } from "@prisma/client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// Disable caching. If 'force-dynamic' is not used, stale data can be returned from Prisma Client.
// Learn more here: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dynamic.
export const dynamic = "force-dynamic";

export async function Quotes() {
  await connection();
  const quotes = await prisma.quotes.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const opinions = quotes.filter((quote) => quote.kind === QuoteKind.Opinion);
  const facts = quotes.filter((quote) => quote.kind === QuoteKind.Fact);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-8">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Found {quotes.length} quotes total • {opinions.length} opinions •{" "}
          {facts.length} facts
        </h4>
      </div>

      {/* Opinions Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
            <span className="text-2xl">💭</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Opinions ({opinions.length})
          </h2>
        </div>
        <HoverEffect items={opinions} />
      </section>
      {/* Facts Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900">
            <span className="text-2xl">🧠</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Facts ({facts.length})
          </h2>
        </div>
        <HoverEffect items={facts} />
      </section>
    </div>
  );
}
