import { PARTNERS } from "@/constants/content";
import Image from "next/image";

export default function PartnersCarousel() {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-lg font-semibold mb-8 text-center text-neutral-dark/70 tracking-wide uppercase" style={{ letterSpacing: 2 }}>
          {PARTNERS.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-10 items-center w-full">
          {PARTNERS.brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center h-16 w-32 bg-neutral-light rounded-lg shadow-sm p-2 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
              <Image src={brand.logo} alt={brand.name + ' logo'} width={96} height={48} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 