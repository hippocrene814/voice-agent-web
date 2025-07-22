import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 sm:px-10 bg-transparent">
      <Link href="/" className="flex items-center gap-3 group" style={{ minHeight: 48 }}>
        <div className="flex items-center justify-center w-10 h-10">
          <Image src="/logo.png" alt="Big Pandan logo" width={40} height={40} priority />
        </div>
        <span className="text-2xl font-bold tracking-tight group-hover:underline" style={{ color: "var(--color-primary)" }}>
          Big Pandan
        </span>
      </Link>
      {/* Add nav links or buttons here if needed */}
    </nav>
  );
} 