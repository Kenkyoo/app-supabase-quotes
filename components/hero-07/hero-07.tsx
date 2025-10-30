import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

export default function Hero({ quote, kind}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h3 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          "{ quote }"
        </h3>
        <Badge
          variant="destructive"
          className="mt-10"
          asChild
        >
        <p className="md:text-lg text-foreground/80">
          { kind }
        </p>
      </Badge>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="/dashboard">
          <Button size="lg" className="rounded-full text-base">
            Back <ArrowUpRight className="h-5! w-5!" />
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
