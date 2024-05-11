import Image from "next/image";
import { Inter } from "next/font/google";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <main className="lg:flex lg:justify-between lg:gap-4">
        <Introduction />
        <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}
