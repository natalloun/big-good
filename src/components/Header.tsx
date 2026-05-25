import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const p = (path: string) => `/${language}${path}`;

  const navItems = [
    { label: t.nav.home,     href: p("") },
    { label: t.nav.about,    href: p("/about") },
    { label: t.nav.tools,    href: p("/services") },
    { label: t.nav.blog,     href: p("/blog") },
    { label: t.nav.newsroom, href: p("/news") },
    { label: t.nav.careers,  href: p("/careers") },
    { label: t.nav.contact,  href: p("/contact") },
  ];

  const isActive = (href: string) => {
    // Home: exact match
    if (href === p("")) return location.pathname === p("") || location.pathname === p("/");
    // Others: exact or child path
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "py-4" : "py-5")}>
            {/* Logo */}
            <Link to={p("")} className="flex items-center gap-3 animate-slide-in-left">
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center transition-all duration-300",
                isScrolled ? "shadow-md" : "shadow-lg"
              )}>
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                Big Good
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm",
                    isActive(item.href) && "text-blue-600 dark:text-blue-400"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-1">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block py-3 px-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium",
                    isActive(item.href) && "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
