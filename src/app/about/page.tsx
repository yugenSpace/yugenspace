import AboutSection from "@/component/sections/about-section";
import PageHeader from "@/component/ui/page-header";

export default function AboutPage() {
  return (
    <div className="w-full h-auto items-center flex min-h-screen flex-col bg-black text-white">
      <PageHeader
        title="About Yugen Space"
        description="Learn about our mission to address soil degradation through space technology"
      />

      <AboutSection />
    </div>
  );
}
