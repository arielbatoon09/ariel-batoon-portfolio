import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's work together to bring your ideas to life and create something amazing.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}