import { HERO } from "@/constants/content";

export default function HeroSection() {
  return (
    <section className="w-full bg-neutral-light py-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
          {HERO.headline}
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-neutral-dark/80">
          {HERO.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2 w-full">
          <a
            href="#"
            className="inline-block rounded-lg bg-primary text-white font-semibold px-8 py-3 shadow-md hover:bg-primary/90 transition-colors border border-primary text-base sm:text-lg w-full sm:w-auto"
            style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)" }}
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-white text-primary font-semibold px-8 py-3 shadow-sm hover:bg-neutral-light/80 transition-colors border border-primary text-base sm:text-lg w-full sm:w-auto"
            style={{ color: "var(--color-primary)", borderColor: "var(--color-primary)" }}
          >
            {HERO.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
} 