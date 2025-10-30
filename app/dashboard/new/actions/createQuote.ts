"use server"

import { PrismaClient, QuoteKind } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const prisma = new PrismaClient()

export async function createQuote(formData: FormData) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()
  if (error || !data?.claims) redirect("/auth/login")

  const userId = data.claims.sub
  const quote = formData.get("quote") as string
  const kind = formData.get("kind") as QuoteKind

  await prisma.quotes.create({
    data: { quote, kind, authorId: userId },
  })

  revalidatePath("/dashboard")
  redirect("/dashboard")
}
