import PhytelyAbout from "@/components/about_section"
import PhyteyHeroSection from "@/components/hero_section"
import OffshoreProductionCardLeft from "@/components/solutions"
import FeaturedPosts from "@/components/blog_posts"
import ContactUs from "@/components/contact_us"
import TestimonialSection from "@/components/testimonials"

export default function HomePage() {
  return (
    <div>
      <PhyteyHeroSection />
      <PhytelyAbout />
      <OffshoreProductionCardLeft />
      <FeaturedPosts />
      <TestimonialSection />
      <ContactUs />
    </div>
  )
}
