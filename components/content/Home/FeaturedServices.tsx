import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Figma, Globe } from "lucide-react";

export function FeaturedServices() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help you build and grow your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground mb-4">
                Custom websites built with modern technologies that are fast, responsive, and accessible.
              </p>
              <Link href="/services" className="text-primary font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Figma className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground mb-4">
                User-centered design that focuses on creating intuitive and engaging user experiences.
              </p>
              <Link href="/services" className="text-primary font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-muted-foreground mb-4">
                Cross-platform applications that work seamlessly on all devices and platforms.
              </p>
              <Link href="/services" className="text-primary font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}