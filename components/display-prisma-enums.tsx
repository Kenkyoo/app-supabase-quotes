'use client'

// src/lib/prisma-enums.ts
import { QUOTE_KIND } from '@/lib/prisma-enums'
import { useState, useEffect } from 'react'
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function DisplayPrismaEnums() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Note: this avoid "Hydration failed" errors in Next.js
    setMounted(true)
  }, [])

  return (
        <CardSpotlight className="max-w-2xl mx-auto h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 mb-5 text-white">
        Debug Info: Prisma Enums (Client Side)
      </p>
      <div className="text-neutral-200 text-center mt-4 relative z-20">
        Rendered on client?
        <div className="mt-10 mx-auto">
         QuoteKind Enum: {QUOTE_KIND.Fact}; {QUOTE_KIND.Opinion}       
      </div>
      </div>
      <p className="text-neutral-300 text-center mt-10 relative z-20 text-sm">
        mounted? {mounted ? 'Yes' : 'No'}
      </p>
    </CardSpotlight>
  )
}