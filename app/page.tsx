import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/navbar"
import { Hero } from "@/components/hero"

export default async function Home() {

  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();
  if (data !== null) {
    redirect("/dashboard");
  }

  return (
    <div className="relative mx-auto my-10 flex flex-col items-center justify-center">
    <Navbar />
    <Hero />
    </div>
  );
}
