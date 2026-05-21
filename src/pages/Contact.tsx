import { Mail, ExternalLink, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "info@biggood.cz", href: "mailto:info@biggood.cz" },
  { icon: ExternalLink, label: "LinkedIn", value: "linkedin.com/company/big-good", href: "https://www.linkedin.com/company/big-good" },
  { icon: MapPin, label: "Adresa", value: "Praha, Česká republika", href: null },
  { icon: Clock, label: "Pracovní doba", value: "Po–Pá: 9:00–17:00", href: null },
];

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", sent: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, sent: true }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium">
              Kontakt
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Napište{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                nám
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Rádi uslyšíme o vašich potřebách, zpětné vazbě nebo partnerských příležitostech.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pošlete nám zprávu</h2>
              {formState.sent ? (
                <Card className="rounded-2xl border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                  <CardContent className="p-8 text-center space-y-3">
                    <div className="text-4xl">✓</div>
                    <p className="text-green-700 dark:text-green-400 font-semibold">Zpráva odeslána!</p>
                    <p className="text-green-600 dark:text-green-500 text-sm">Ozveme se vám co nejdříve.</p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Jméno
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      placeholder="jan@firma.cz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Zpráva
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                      placeholder="Jak vám můžeme pomoci?"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg py-6 font-semibold"
                  >
                    Odeslat zprávu
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kde nás najdete</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <Card className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                            {info.label}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );

                  return info.href ? (
                    <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
