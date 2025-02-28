import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Crafting Digital Experiences That Matter
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            I build beautiful, functional, and accessible websites and applications that help businesses grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}