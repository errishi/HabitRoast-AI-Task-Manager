"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  ChevronDown,
  Flame,
} from "lucide-react";

const faqs = [
  {
    question: "Is HabitRoast actually mean to me?",
    answer:
      "Think of it as tough love from an AI that genuinely wants you to succeed — but also finds your procrastination hilarious. The roasts are witty and sarcastic, not cruel. You'll laugh, cringe, and then actually do the task.",
  },
  {
    question: "What AI model generates the roasts?",
    answer:
      "We use Google's Gemini API via the Vercel AI SDK to generate personalized roasts. The AI considers your specific task, how long it's been overdue, and your history of procrastination to craft the perfect burn.",
  },
  {
    question: "Can I control how aggressive the roasts are?",
    answer:
      "Absolutely! You can set your roast intensity from \"Gentle Nudge\" (mild encouragement with a hint of sass) all the way up to \"Full Inferno\" (no holds barred, gloves off, nuclear-grade roasting). Most users end up on Full Inferno within a week.",
  },
  {
    question: "Is my data safe? Who can see my roasts?",
    answer:
      "Your tasks and roasts are completely private by default. We use industry-standard encryption and never share your data. The only optional sharing is the public \"Wall of Shame\" which requires explicit opt-in for each roast.",
  },
  {
    question: "Does it actually help with productivity?",
    answer:
      "Surprisingly, yes. Studies show that humour-based accountability is incredibly effective. Our users report completing 47% more tasks after signing up. Turns out, the fear of an AI roasting you is a powerful motivator.",
  },
  {
    question: "Is it free to use?",
    answer:
      "HabitRoast offers a free tier with up to 10 tasks and 5 AI roasts per month. For unlimited tasks, unlimited roasts, and premium features like Shame Analytics and Accountability Walls, check out our Pro plan.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className={`group w-full text-left rounded-xl border transition-all duration-300 ${
          isOpen
            ? "border-red-500/15 bg-red-500/[0.03]"
            : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.03]"
        }`}
        id={`faq-${index}`}
      >
        <div className="flex items-center justify-between p-5">
          <span className={`text-sm font-medium transition-colors sm:text-base ${isOpen ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
            {faq.question}
          </span>
          <ChevronDown
            className={`size-4 shrink-0 ml-4 text-white/30 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-red-400" : ""
            }`}
          />
        </div>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="px-5 pb-5 text-sm leading-relaxed text-white/40">
            {faq.answer}
          </p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative px-4 py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[400px] rounded-full bg-orange-500/[0.03] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 border-orange-500/20 bg-orange-500/10 text-orange-400 px-3 py-1">
            <HelpCircle className="mr-1 size-3" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions? We&apos;ve Got{" "}
            <span className="text-gradient-flame">Answers.</span>
          </h2>
          <p className="mt-4 text-base text-white/40">
            And if you don&apos;t find your answer, we&apos;ll roast you for not
            reading carefully enough.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
