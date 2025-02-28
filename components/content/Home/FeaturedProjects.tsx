import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight} from "lucide-react"

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="E-commerce Website Project"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="text-muted-foreground mb-4">
                A modern e-commerce platform built with Next.js and Stripe integration.
              </p>
              <Link href="/portfolio" className="text-primary font-medium inline-flex items-center">
                View project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Mobile App Project"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Health & Fitness App</h3>
              <p className="text-muted-foreground mb-4">
                A cross-platform mobile application for tracking fitness goals and progress.
              </p>
              <Link href="/portfolio" className="text-primary font-medium inline-flex items-center">
                View project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}