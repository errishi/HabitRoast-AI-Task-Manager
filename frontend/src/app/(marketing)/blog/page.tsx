"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Flame } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Sample data
const featuredPost = {
  title: "Why Positive Reinforcement is Ruining Your Productivity",
  excerpt: "We've been taught that rewarding ourselves for small wins is the key to building habits. Our AI data suggests otherwise. Here is why you actually need to be bullied into getting things done.",
  date: "Oct 12, 2026",
  readTime: "8 min read",
  category: "Psychology",
  imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
  slug: "#",
};

const recentPosts = [
  {
    title: "The Anatomy of a Perfect AI Roast",
    excerpt: "How we trained our Gemini model to find the exact words that will make you close Twitter and open your code editor.",
    date: "Oct 05, 2026",
    readTime: "5 min read",
    category: "Behind the Scenes",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    slug: "#",
  },
  {
    title: "Top 10 Excuses Procrastinators Use (And How We Destroy Them)",
    excerpt: "\"I just work better under pressure.\" Sure you do. Here is a breakdown of the most common lies we tell ourselves.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    category: "Productivity",
    imageUrl: "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "#",
  },
  {
    title: "Introducing 'Hardcore Mode': When Regular Shaming Isn't Enough",
    excerpt: "For our most stubborn users, we're introducing a new mode that literally emails your accountability partner if you miss a deadline.",
    date: "Sep 15, 2026",
    readTime: "4 min read",
    category: "Product Updates",
    imageUrl: "https://images.unsplash.com/photo-1675627453075-0f170b02186a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "#",
  },
  {
    title: "The Dopamine Detox: A Guide to Resetting Your Brain",
    excerpt: "Before the AI can roast you into shape, you might need to fix your attention span. Here is our aggressive guide to dopamine fasting.",
    date: "Sep 02, 2026",
    readTime: "10 min read",
    category: "Guides",
    imageUrl: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "#",
  },
  {
    title: "How John Finished His Thesis Using HabitRoast",
    excerpt: "A case study of a serial procrastinator who finally submitted his PhD thesis after 4 months of relentless AI bullying.",
    date: "Aug 21, 2026",
    readTime: "7 min read",
    category: "Case Studies",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "#",
  },
  {
    title: "Is Procrastination Genetic? The Science of Delay",
    excerpt: "Can you blame your parents for your inability to finish that quarterly report? We look at the latest neurological research.",
    date: "Aug 10, 2026",
    readTime: "9 min read",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed right-0 top-0 w-200 h-200 rounded-full bg-orange-500/3 blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none fixed left-0 top-[40%] w-200 h-200 rounded-full bg-red-500/3 blur-[150px] -translate-x-1/2" />

      <main className="flex-1 px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 flex justify-center"
            >
              <Badge className="border-red-500/20 bg-red-500/10 text-red-400 px-4 py-1.5 text-sm font-medium">
                <Flame className="mr-1.5 size-3.5" />
                The Roast Blog
              </Badge>
            </motion.div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Insights on <span className="text-gradient-flame glow-flame-text">Productivity.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
            >
              Read our latest articles on how to stop procrastinating, the science of focus, and behind-the-scenes looks at our AI models.
            </motion.p>
          </div>

          {/* Featured Post */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-24"
          >
            <h2 className="mb-8 text-2xl font-bold text-white">Featured Article</h2>
            <Link href={featuredPost.slug} className="group block">
              <div className="flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/2 backdrop-blur-md transition-all hover:bg-white/4 hover:shadow-2xl hover:shadow-red-500/10 lg:flex-row glass-card">
                {/* Image Cover */}
                <div className="relative h-64 w-full overflow-hidden lg:h-auto lg:w-1/2 bg-black/40">
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 lg:bg-linear-to-r" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                  <div className="mb-4 flex items-center gap-4 text-xs text-white/40">
                    <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-400 font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-red-400 sm:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="mb-8 text-base leading-relaxed text-white/50 sm:text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-red-400">
                    Read Full Article <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Recent Posts Grid */}
          <div>
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8 flex items-end justify-between"
            >
              <h2 className="text-2xl font-bold text-white">Latest Posts</h2>
            </motion.div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  custom={5 + index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Link href={post.slug} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-white/2 transition-all hover:bg-white/4 hover:shadow-xl hover:shadow-red-500/5">
                    {/* Image Cover */}
                    <div className="relative h-48 w-full overflow-hidden bg-black/40">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6 relative z-10 bg-linear-to-b from-transparent to-[#0a0a0a]/50">
                      <div className="mb-4 flex items-center justify-between text-xs text-white/40">
                        <span className="text-red-400 font-medium">{post.category}</span>
                        <div className="flex items-center gap-1.5">
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-red-400 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="mb-6 text-sm leading-relaxed text-white/50 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-white/70 transition-colors group-hover:text-red-400">
                        Read more <ArrowRight className="size-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
