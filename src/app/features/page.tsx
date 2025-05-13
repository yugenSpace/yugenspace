import AnalysisSection from "@/component/sections/dashboard-section";
import FeaturesSection from "@/component/sections/features-section";
import PageHeader from "@/component/ui/page-header";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen w-full items-center flex-col bg-black text-white">
      <PageHeader
        title="Our Technology"
        subtitle="Discover how our proprietary sensors in space bring you the power of hyperspectral imaging"
      />
      <FeaturesSection />
      <AnalysisSection />
    </div>
  );
}
