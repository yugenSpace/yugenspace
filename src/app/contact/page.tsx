import ContactSection from "@/component/sections/contact-section";
import PageHeader from "@/component/ui/page-header";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full items-center flex-col bg-black text-white">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch to schedule a demo or learn more about our solutions"
      />
      <ContactSection />
    </div>
  );
}
