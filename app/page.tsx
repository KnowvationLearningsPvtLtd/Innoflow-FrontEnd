import { HeroSection } from "@/components/landing/hero-section"
import { FeatureSection } from "@/components/landing/feature-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { NotebookSection } from "@/components/landing/notebook-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { AgentsSection } from "@/components/landing/agents-section"
import { DragDropSection } from "@/components/landing/drag-drop-section"
import { FlowApiSection } from "@/components/landing/flow-api-section"

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DragDropSection />
      <AgentsSection />
      <FlowApiSection />
      <IntegrationSection />
      <TestimonialSection />
      <NotebookSection />
      <CTASection />
      <Footer />
    </main>
  )
}
