import HeroSection from "@/component/sections/hero-section";
import AboutSection from "@/component/sections/about-section";
import FeaturesSection from "@/component/sections/features-section";
import DashboardSection from "@/component/sections/dashboard-section";
import ContactSection from "@/component/sections/contact-section";
import PageHeader from "@/component/ui/page-header";
import ParrtnerSection from "@/component/sections/partner-section";

export default function Home() {
  return (
    <div className="w-full m-0 p-0 overflow-x-hidden flex min-h-screen items-center justify-center flex-col bg-black text-white">
      <HeroSection />
      <DashboardSection />
      <FeaturesSection />
      {/* <PageHeader
        title="About Yugen Space"
        description="Learn about our mission to address soil degradation through space technology"
        color="white"
        showBorder={true}
      /> */}
      <AboutSection />
      <ParrtnerSection />{" "}
      <PageHeader
        title="Contact Us"
        description="Get in touch to schedule a demo or learn more about our solutions"
        showBorder={true}
      />
      <ContactSection />
    </div>
  );
}
