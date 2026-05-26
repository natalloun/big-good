import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useLanguage } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { News } from "./pages/News";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import type { Language } from "./lib/i18n";
import { SITE_URL } from "./components/SEO";

const VALID_LANGS: Language[] = ["en", "cs", "de"];

/** Redirects root "/" to the user's stored or browser language */
function LangDetector() {
  const navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem("biggood-lang");
    if (stored && VALID_LANGS.includes(stored as Language)) {
      navigate(`/${stored}`, { replace: true });
    } else {
      const browser = navigator.language.slice(0, 2).toLowerCase();
      navigate(`/${VALID_LANGS.includes(browser as Language) ? browser : "en"}`, { replace: true });
    }
  }, []);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

/** Reads :lang from URL, syncs it to context, renders nested routes via <Outlet /> */
function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lang || !VALID_LANGS.includes(lang as Language)) {
      navigate("/en", { replace: true });
      return;
    }
    setLanguage(lang as Language);
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/** Global JSON-LD Organization schema */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Big Good",
  url: SITE_URL,
  logo: `${SITE_URL}/images/team.png`,
  description:
    "Big Good is an ecosystem of email and content tools — Ecomail, Topol, DMARCeye and Lettr — built and operated by ECOMAIL.CZ, s.r.o., a Czech company based in Prague.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na příkopě 388/1",
    addressLocality: "Praha 1",
    postalCode: "110 00",
    addressCountry: "CZ",
  },
  founder: [
    { "@type": "Person", name: "Jan Tlapák" },
    { "@type": "Person", name: "Jakub Stupka" },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "ECOMAIL.CZ, s.r.o.",
    taxID: "02762943",
  },
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="biggood-theme">
      <BrowserRouter basename="/big-good">
        <LanguageProvider>
          {/* Sitewide JSON-LD */}
          <Helmet>
            <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
          </Helmet>

          <Routes>
            {/* Root: detect language and redirect */}
            <Route path="/" element={<LangDetector />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LangLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="news" element={<News />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
            </Route>

            {/* Fallback for any unknown path */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
