import { HeroBanner } from "@/components/content/Home/HeroBanner"
import { FeaturedServices } from "@/components/content/Home/FeaturedServices"
import { FeaturedProjects } from "@/components/content/Home/FeaturedProjects"
import { Testimonials } from "@/components/common/Testimonials"
import { CTASection } from "@/components/common/CTASection"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedServices />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}