import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className="w-full bg-neutral-light border-b border-neutral-medium">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3 no-underline hover:underline focus:underline" style={{ minHeight: 48 }}>
          <div className="flex items-center justify-center w-10 h-10">
            <Image src="/logo.png" alt="Big Pandan logo" width={40} height={40} priority />
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
            Big Pandan
          </span>
        </Link>
        {/* Add nav links or buttons here if needed */}
      </div>
    </nav>
  );
} 