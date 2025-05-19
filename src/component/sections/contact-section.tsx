"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* <div className="beam beam-5"></div> */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-badge mb-4">Get Started</div>
            <h2 className="capitalize font-display text-4xl font-bold tracking-tight mb-6">
              contact us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>
            <p className="text-lg text-white/70 mb-6">
              Send us a message and we will get back to you as soon as possible!
            </p>
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="font-display text-xl mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/70">Email:</p>
                  <a
                    href="mailto:anand@yugenspace.com"
                    className="text-primary hover:underline"
                  >
                    anand@yugenspace.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-white/70">Headquarters:</p>
                  <p className="text-white capitalize">Tübingen, Germany</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-display text-sm font-medium leading-none"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="glass-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-display text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="glass-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="font-display text-sm font-medium leading-none"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="glass-input"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-display text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="glass-input min-h-[120px]"
                    placeholder="Tell us about your needs"
                  />
                </div>
                <Button className="w-full" variant="glow">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
