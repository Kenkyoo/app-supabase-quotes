import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import { Quotes } from "@/components/quotes";
import { QuotesLoading } from "@/components/quotes-loading";
import { DisplayPrismaEnums } from "@/components/display-prisma-enums";
import Hero from "@/components/hero-02/hero-02";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 px-4">
      <Hero>
        <DisplayPrismaEnums />
      </Hero>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Quotes: A collection of inspiring opinions and fascinating facts
        </h2>
      </div>
      <Suspense fallback={<QuotesLoading />}>
        <Quotes />
      </Suspense>
    </div>
  );
}
