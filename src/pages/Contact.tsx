import { MapPin, Globe, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    sent: false,
    sending: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, sending: true }));
    setTimeout(() => {
      setFormState((s) => ({ ...s, sending: false, sent: true }));
    }, 1000);
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              Let's Talk
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Ready to join the ecosystem?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal">
              Whether you're looking to grow with our tools or build something new together.
            </p>

            {/* Location cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto pt-4">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-xl hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg mx-auto">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Prague</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our home and headquarters</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-xl hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg mx-auto">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">70+ countries worldwide</h3>
                  <p className="text-gray-600 dark:text-gray-400">Trusted by users worldwide</p>
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
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
                Get in Touch
              </Badge>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                Let's talk
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-bold">
                Proudly based in Prague, serving the world
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our tools started in the heart of Europe, but they've grown to serve creators, marketers, and teams in 70+ countries worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-6">
                {formState.sent ? (
                  <Card className="rounded-2xl border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                    <CardContent className="p-10 text-center space-y-3">
                      <div className="text-5xl">✓</div>
                      <p className="text-green-700 dark:text-green-400 font-bold text-xl">Message sent!</p>
                      <p className="text-green-600 dark:text-green-500">We'll get back to you as soon as possible.</p>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Your name
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
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        placeholder="jan@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Tell us about your project
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                        placeholder="Tell us about your project"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={formState.sending}
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg py-6 font-semibold"
                    >
                      {formState.sending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact info */}
              <div className="space-y-6">
                <Card className="rounded-2xl border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Address</p>
                        <p className="font-semibold text-gray-900 dark:text-white">Big Good s.r.o.</p>
                        <p className="text-gray-600 dark:text-gray-400">Prague, Czech Republic</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Email</p>
                        <a href="mailto:pr@ecomail.cz" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          pr@ecomail.cz
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Follow Us</p>
                        <a
                          href="https://www.linkedin.com/company/big-good"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-400 font-medium text-center">
                    70+ countries worldwide
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
