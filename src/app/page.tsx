import HeroSection from "@/component/sections/hero-section";
import DiscoverSection from "@/component/sections/discover-section";
import AboutSection from "@/component/sections/about-section";
import FeaturesSection from "@/component/sections/features-section";
import AnalysisSection from "@/component/sections/analysis-section";
import ContactSection from "@/component/sections/contact-section";
import PageHeader from "@/component/ui/page-header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col bg-black text-white">
      <HeroSection />
      <DiscoverSection />
      <FeaturesSection />
      <AnalysisSection />
      <PageHeader
        title="About Yugen Space"
        subtitle="Learn about our mission to address soil degradation through space technology"
      />
      <AboutSection />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch to schedule a demo or learn more about our solutions"
      />
      <ContactSection />
    </div>
  );
}
