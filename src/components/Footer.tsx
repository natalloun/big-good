import { Link } from "react-router-dom";
import { ExternalLink, Mail } from "lucide-react";

const navLinks = [
  { label: "O nás", href: "/about" },
  { label: "Novinky", href: "/news" },
  { label: "Kariéra", href: "/careers" },
];

const serviceLinks = [
  { label: "Všechny služby", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10 mb-12 items-start">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <span className="text-2xl font-bold">Big Good</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Budujeme digitální produkty, které pomáhají lidem a firmám růst.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">Společnost</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Produkty</h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Kontakt</h4>
              <div className="flex gap-2 mb-4">
                <a
                  href="https://www.linkedin.com/company/big-good"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover-lift"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@biggood.cz"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover-lift"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <a
                href="mailto:info@biggood.cz"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                info@biggood.cz
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Big Good. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
