import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HabitRoast — The Aggressive AI Task Manager",
  description:
    "Stop procrastinating or get publicly roasted by AI. The to-do list that shames you into productivity with personalized, sarcastic AI-generated roasts.",
  keywords: [
    "habit tracker",
    "AI task manager",
    "productivity",
    "accountability",
    "todo list",
    "procrastination",
  ],
  openGraph: {
    title: "HabitRoast — The Aggressive AI Task Manager",
    description:
      "Stop procrastinating or get publicly roasted by AI. Set goals, miss deadlines, and get personalized AI-generated roasts about your work ethic.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HabitRoast — The Aggressive AI Task Manager",
    description:
      "Stop procrastinating or get publicly roasted by AI.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "dark", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
