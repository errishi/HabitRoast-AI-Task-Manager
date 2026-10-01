"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Flame,
  ArrowRight,
} from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Outer glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20 blur-xl" />

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]">
          {/* Inner background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-red-500/[0.08] blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[150px] rounded-full bg-orange-500/[0.05] blur-[80px]" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Flame icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="flex size-16 items-center justify-center rounded-2xl bg-gradient-flame shadow-xl shadow-red-500/30"
            >
              <Flame className="size-8 text-white" />
            </motion.div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to Get{" "}
                <span className="text-gradient-flame">Roasted?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/40 sm:text-lg">
                Join thousands of reformed procrastinators who turned their shame
                into productivity. Your first roast is free.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="h-12 gap-2 bg-gradient-flame border-0 px-8 text-base font-semibold text-white shadow-xl shadow-red-500/25 transition-all hover:opacity-90 hover:shadow-red-500/35"
                  id="cta-get-started-btn"
                >
                  <Flame className="size-4" />
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            <p className="text-xs text-white/25">
              No credit card required · 10 free tasks · 5 free roasts/month
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
