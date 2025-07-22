import { HERO } from "@/constants/content";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 sm:py-24 sm:px-8 bg-neutral-light">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
          {HERO.headline}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-neutral-dark/80">
          {HERO.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#"
            className="inline-block rounded-lg bg-primary text-white font-semibold px-8 py-3 shadow-md hover:bg-primary/90 transition-colors border border-primary"
            style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)" }}
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-white text-primary font-semibold px-8 py-3 shadow-sm hover:bg-neutral-light/80 transition-colors border border-primary"
            style={{ color: "var(--color-primary)", borderColor: "var(--color-primary)" }}
          >
            {HERO.ctaSecondary}
          </a>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="w-[320px] h-[220px] bg-neutral-medium/30 rounded-2xl flex items-center justify-center">
          {/* Replace with real image later */}
          <Image src="/next.svg" alt="Hero placeholder" width={120} height={40} />
        </div>
      </div>
    </section>
  );
} 