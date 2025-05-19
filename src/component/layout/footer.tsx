import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { APP_CONFIG } from "@/constant/config.constant";
import { PAGE_ROUTES } from "@/constant/route.constant";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <footer className=" border-t border-white/10 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="w-full md:min-w-96 space-y-4">
              <Link
                href={PAGE_ROUTES.HOME.path}
                className="flex items-center gap-2"
              >
                <div className="relative h-12 w-52">
                  <Image
                    src={APP_CONFIG.APP_LOGO}
                    fill
                    alt="Yugen Space Logo"
                    className="object-cover"
                  />
                </div>
                {/* <span className="font-display text-lg tracking-wider">
                  yugen space
                </span> */}
              </Link>
              <p className="text-sm text-white/70 max-w-xs">
                Making Earth Observation Simple.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`#${PAGE_ROUTES.ANALYSIS.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Soil Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${PAGE_ROUTES.FEATURES.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Crop Yield Prediction
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${PAGE_ROUTES.FEATURES.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Fertilizer Optimization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`#${PAGE_ROUTES.ABOUT.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${PAGE_ROUTES.CONTACT.id}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* <Link
                  href="#"
                  className="glass-icon p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Link> */}
                <Link
                  href="#"
                  className="glass-icon p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                {/* <Link
                  href="#"
                  className="glass-icon p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </Link> */}
              </div>
              <div className="mt-4">
                <p className="text-sm text-white/70">Email:</p>
                <a
                  href="mailto:anand@yugenspace.com"
                  className="text-sm text-primary hover:underline"
                >
                  anand@yugenspace.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/50">
              © 2025 Yugen Space. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
