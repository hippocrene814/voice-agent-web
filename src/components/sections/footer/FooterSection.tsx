import { FOOTER } from "@/constants/content";

export default function FooterSection() {
  return (
    <footer className="w-full py-12 bg-neutral-light border-t border-neutral-medium mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
        <div className="text-neutral-dark/60 text-base">{FOOTER.copyright}</div>
        <div className="flex gap-8 flex-wrap justify-center">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-dark/80 text-base no-underline hover:underline focus:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
} 