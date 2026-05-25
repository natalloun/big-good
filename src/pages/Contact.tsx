import { MapPin, Globe, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();
  const c = t.contact;

  const [formState, setFormState] = useState({
    name: "", email: "", company: "", message: "", sent: false, sending: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, sending: true }));
    try {
      const res = await fetch("https://formsubmit.co/ajax/jack@topol.io", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          message: formState.message,
        }),
      });
      if (!res.ok) throw new Error();
      setFormState((s) => ({ ...s, sending: false, sent: true }));
    } catch {
      setFormState((s) => ({ ...s, sending: false }));
    }
  };

  return (
    <>
      <SEO
        title="Kontakt | Big Good"
        description="Spojte se s týmem Big Good. ECOMAIL.CZ, s.r.o., Na příkopě 388/1, 110 00 Praha 1. E-mail: support@ecomail.cz"
        url="/contact"
        lang={language}
      />
      {/* CTA Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white tracking-tight">{c.heroHeading}</h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal">{c.heroDesc}</p>

            {/* Location cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto pt-4">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-xl hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg mx-auto">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{c.prague.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{c.prague.desc}</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-xl hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg mx-auto">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{c.global.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{c.global.desc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">{c.formHeading}</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-bold">{c.tagline}</p>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{c.formDesc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-6">
                {formState.sent ? (
                  <Card className="rounded-2xl border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                    <CardContent className="p-10 text-center space-y-3">
                      <div className="text-5xl">✓</div>
                      <p className="text-green-700 dark:text-green-400 font-bold text-xl">{c.sent}</p>
                      <p className="text-green-600 dark:text-green-500">{c.sentDesc}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { key: "name", label: c.name, type: "text", required: true, placeholder: "Jan Novák" },
                      { key: "email", label: c.email, type: "email", required: true, placeholder: "jan@company.com" },
                      { key: "company", label: c.company, type: "text", required: false, placeholder: "Your company" },
                    ].map(({ key, label, type, required, placeholder }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{label}</label>
                        <input
                          type={type}
                          name={key}
                          required={required}
                          value={formState[key as keyof typeof formState] as string}
                          onChange={(e) => setFormState((s) => ({ ...s, [key]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{c.message}</label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                        placeholder={c.message}
                      />
                    </div>
                    <Button type="submit" size="lg" disabled={formState.sending} className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg py-6 font-semibold">
                      {formState.sending ? c.sending : c.submit}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact info */}
              <div className="space-y-6">
                <Card className="rounded-2xl border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8 space-y-6">
                    {[
                      { icon: MapPin, label: c.address, main: "ECOMAIL.CZ, s.r.o.", sub: "Na příkopě 388/1, 110 00 Praha 1" },
                      { icon: Mail, label: "Email", main: "pr@ecomail.cz", href: "mailto:pr@ecomail.cz" },
                      { icon: Globe, label: c.follow, main: "LinkedIn", href: "https://www.linkedin.com/company/big-good" },
                    ].map(({ icon: Icon, label, main, sub, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">{label}</p>
                          {href ? (
                            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-2 decoration-gray-400 dark:decoration-gray-500 hover:decoration-blue-600 dark:hover:decoration-blue-400">{main}</a>
                          ) : (
                            <>
                              <p className="font-semibold text-gray-900 dark:text-white">{main}</p>
                              {sub && <p className="text-gray-600 dark:text-gray-400">{sub}</p>}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-400 font-medium text-center">
                    {c.global.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
