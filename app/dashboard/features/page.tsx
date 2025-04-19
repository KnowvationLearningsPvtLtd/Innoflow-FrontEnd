import { FeatureShowcase } from "@/components/flow/feature-blocks/feature-showcase"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Langflow Features</h1>
      <FeatureShowcase />
    </div>
  )
}
