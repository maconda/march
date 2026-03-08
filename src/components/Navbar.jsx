import { useState, useEffect } from "react";
import { Languages } from "lucide-react";

export function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.life, href: "#life" },
    { name: t.nav.tools, href: "#tools" },
    { name: t.nav.consultation, href: "#consultation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? "bg-[#f5f2ed]/80 backdrop-blur-md border-b border-zinc-200 py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-4xl font-serif font-bold tracking-tight">
          Elvin<span className="text-zinc-400 italic">.</span>
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-serif font-bold tracking-tight text-zinc-900 hover:opacity-70 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 text-xs font-semibold hover:bg-zinc-50 transition-colors"
          >
            <Languages size={14} />
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
