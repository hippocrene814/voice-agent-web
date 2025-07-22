import { HOW_IT_WORKS } from "@/constants/content";
import { Phone, Mic, CheckCircle, Smile } from "lucide-react";

const icons = {
  phone: Phone,
  mic: Mic,
  "check-circle": CheckCircle,
  smile: Smile,
};

export default function HowItWorksSection() {
  return (
    <section className="w-full py-20 bg-neutral-light">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-primary)" }}>{HOW_IT_WORKS.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {HOW_IT_WORKS.steps.map((step, idx) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <div key={step.title} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md h-full transition-transform hover:-translate-y-1">
                <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
                  <Icon size={36} strokeWidth={2.2} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neutral-dark/90">{step.title}</h3>
                <p className="text-neutral-dark/80 text-base leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 