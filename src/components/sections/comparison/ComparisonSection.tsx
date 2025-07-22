import { COMPARISON } from "@/constants/content";
import { ArrowRightLeft, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-primary)" }}>{COMPARISON.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-light rounded-2xl shadow p-8 flex flex-col items-center border border-neutral-medium">
            <ArrowRightLeft className="mb-3 text-neutral-dark/40" size={32} />
            <h3 className="font-semibold text-lg mb-4 text-neutral-dark/80">{COMPARISON.before.label}</h3>
            <ul className="list-disc list-inside text-neutral-dark/70 space-y-2">
              {COMPARISON.before.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="bg-accent/10 rounded-2xl shadow p-8 flex flex-col items-center border border-accent/30">
            <Sparkles className="mb-3" size={32} style={{ color: "var(--color-accent)" }} />
            <h3 className="font-semibold text-lg mb-4" style={{ color: "var(--color-primary)" }}>{COMPARISON.after.label}</h3>
            <ul className="list-disc list-inside text-neutral-dark/80 space-y-2">
              {COMPARISON.after.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 