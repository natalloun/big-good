import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  { name: "Ecomail", url: "https://ecomail.cz/" },
  { name: "Topol", url: "https://topol.io/" },
  { name: "DMARCeye", url: "https://dmarceye.com/" },
  { name: "Lettr", url: "https://lettr.com/" },
];

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const companyLinks = [
    { label: f.about, href: "/about" },
    { label: f.values, href: "/about" },
    { label: f.careers, href: "/careers" },
    { label: f.newsroom, href: "/news" },
  ];

  const resourceLinks = [
    { label: f.blog, href: "/blog" },
    { label: f.pressKit, href: "/news" },
    { label: f.forMedia, href: "/news" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] xl:grid-cols-[360px_1fr] gap-8 md:gap-10 xl:gap-12 mb-12 items-start">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <span className="text-2xl font-bold">Big Good</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">{f.company}</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">{f.ourTools}</h4>
              <ul className="space-y-2.5">
                {tools.map((tool) => (
                  <li key={tool.name}>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {tool.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">{f.resources}</h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Big Good. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">{f.privacy}</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">{f.terms}</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">{f.cookies}</Link>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            {f.credit}{" "}
            <a href="https://ecomail.cz/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
              Ecomail
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
