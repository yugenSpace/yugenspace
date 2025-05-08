"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="beam beam-4"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-badge mb-4">Our Mission</div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
              About Yugen Space
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6"></div>
            <p className="text-lg text-white/70 mb-6">
              Yugen Space is a space-tech start-up aiming to leverage the
              advances in space sciences to tackle global crises. Our mission on
              hand is to address the soil degradation crisis by precise soil
              monitoring, using advanced satellites and developing smart
              analysis systems to democratize earth observation.
            </p>
            <blockquote className="glass-quote-border mb-8">
              {`Grounded in Earth, Elevated by Space`}
            </blockquote>
            <Button variant="glass">
              <Link href="/contact">LEARN MORE</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-image-container">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Primary Image"
                className="rounded-lg"
              />
            </div>
            <div className="glass-image-container">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Secondary Image"
                className="rounded-lg"
              />
            </div>
            <div className="glass-image-container col-span-2">
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Tertiary Image"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
