import { motion } from 'framer-motion';

export default function App() {
  const BRAND = {
    bg: "#FAF5F1",
    card: "#FFFFFF",
    border: "#E9E1DA",
    ink: "#0F0F0F",
    sub: "#6B6B6B",
  };

  const logoUrl = "https://drive.google.com/uc?export=view&id=1-fpYuHQNxXBpt0_r9JSs3U7-Xj2WGhAc";

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => scrollToId("contact");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } }
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: BRAND.bg, color: BRAND.ink }}>
      <header
        className="sticky top-0 z-40 backdrop-blur border-b"
        style={{ backgroundColor: "rgba(255,255,255,0.8)", borderColor: BRAND.border }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl overflow-hidden grid place-items-center border"
              style={{ borderColor: BRAND.border }}
            >
              {logoUrl ? (
                <img src={logoUrl} alt="Market King" className="h-full w-full object-cover" />
              ) : (
                <div className="text-xs tracking-widest font-semibold">MK</div>
              )}
            </div>
            <div className="leading-tight">
              <div className="text-xl font-semibold tracking-tight">Market King</div>
              <div className="text-xs" style={{ color: BRAND.sub }}>
                Social • Content • Growth
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollToId('services')} className="hover:opacity-80">Services</button>
            <button onClick={() => scrollToId('pricing')} className="hover:opacity-80">Packages</button>
            <button onClick={() => scrollToId('about')} className="hover:opacity-80">About</button>
            <button onClick={() => scrollToId('faq')} className="hover:opacity-80">FAQ</button>
          </nav>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition"
            style={{ border: `1px solid ${BRAND.border}` }}
          >
            Get Proposal
          </button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: BRAND.ink }}>
                Classic. Professional. Results-driven social for local businesses.
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: BRAND.sub }}>
                Market King crafts elegant, performance-focused content and manages your social presence end-to-end—so you can focus on the business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={scrollToContact}
                  className="rounded-xl px-6 py-3 text-sm font-medium will-change-transform"
                  style={{ backgroundColor: BRAND.ink, color: "#fff" }}
                >
                  Request a Free Audit
                </button>
                <button onClick={() => scrollToId('services')} className="rounded-xl px-6 py-3 text-sm font-medium will-change-transform" style={{ border: `1px solid ${BRAND.border}` }}>See Services</button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs" style={{ color: BRAND.sub }}>
                <div>Weekly content calendar</div>
                <div>On-brand editing</div>
                <div>Transparent reports</div>
              </div>
            </motion.div>
            <motion.img
              variants={fadeIn}
              src="https://images.unsplash.com/photo-1501556424050-d4816356b73e?q=80&w=1600&auto=format&fit=crop"
              alt="Hero: luxury marketing agency"
              className="rounded-2xl shadow-sm border object-cover w-full aspect-[16/10]"
              style={{ borderColor: BRAND.border }}
            />
          </div>
        </motion.div>
      </section>

      <section className="border-y" style={{ backgroundColor: "#F6EFE9", borderColor: BRAND.border }}>
        <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center" variants={fadeUp}>
            Why Market King
          </motion.h2>
          <motion.img
            variants={fadeIn}
            src="https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1600&auto=format&fit=crop"
            alt="Why Market King banner"
            className="w-full rounded-2xl border object-cover mt-8 mb-12"
            style={{ borderColor: BRAND.border }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { h: "Boutique attention", p: "You’ll work directly with the team doing the work—no hand-offs, no silos." },
              { h: "Classic aesthetic", p: "Clean typography, restrained color, premium composition. No gimmicks." },
              { h: "Local insight", p: "We understand Regina audiences and small-business realities." },
              { h: "Compliance-savvy", p: "Cannabis/Vape friendly content that respects platform rules." },
              { h: "Transparent reporting", p: "Clear monthly dashboards and practical recommendations." },
              { h: "Speed & reliability", p: "Calendars delivered on time. Posts go out as promised." },
            ].map((item) => (
              <motion.div key={item.h} className="rounded-2xl p-6 bg-white border" style={{ borderColor: BRAND.border }} variants={fadeUp}>
                <div className="text-lg font-semibold">{item.h}</div>
                <p className="mt-2 text-sm" style={{ color: BRAND.sub }}>{item.p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.img
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="Services banner"
          className="w-full rounded-2xl border object-cover mb-10"
          style={{ borderColor: BRAND.border }}
        />
        <motion.div className="grid md:grid-cols-2 gap-10 items-start" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services built for outcomes</h2>
            <p className="mt-4" style={{ color: BRAND.sub }}>Simple, effective deliverables. No fluff, no agency-speak.</p>
            <ul className="mt-6 space-y-4">
              {["Content strategy & monthly calendar","Short-form video (Reels/TikTok) + graphic design","Publishing, engagement & community replies","Meta ad setup & basic campaigns","Monthly reporting & insights"].map((li) => (
                <li key={li} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.ink }}></span>{li}</li>
              ))}
            </ul>
            <div className="mt-8">
              <button onClick={() => scrollToId('pricing')} className="rounded-xl px-6 py-3 text-sm font-medium" style={{ border: `1px solid ${BRAND.border}` }}>See Packages</button>
            </div>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 gap-6" variants={stagger}>
            {[
              { title: "Content Production", desc: "Reels, stories, carousels—shot and edited for your brand." },
              { title: "Channel Management", desc: "We post, you focus on the business. Replies included." },
              { title: "Paid Social Setup", desc: "Foundations for Meta ads with clear, simple targeting." },
              { title: "Analytics & Reporting", desc: "Clean monthly reports with practical recommendations." },
            ].map((card) => (
              <motion.div key={card.title} className="rounded-2xl p-6 bg-white border hover:shadow-sm transition" style={{ borderColor: BRAND.border }} variants={fadeUp}>
                <div className="text-lg font-semibold">{card.title}</div>
                <p className="mt-2 text-sm" style={{ color: BRAND.sub }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div className="text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Straightforward Packages</h2>
          <p className="mt-3" style={{ color: BRAND.sub }}>Start lean. Upgrade when you’re ready. Cancel any time.</p>
        </motion.div>
        <motion.img
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
          alt="Pricing banner"
          className="w-full rounded-2xl border object-cover my-10"
          style={{ borderColor: BRAND.border }}
        />
        <motion.div className="mt-10 grid gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {[
            { name: "Starter", price: "$249/mo", badge: "Best for first-time", features: ["8 posts/month (mix of reels + graphics)","Caption writing + hashtags","Publishing & basic engagement","Monthly summary report"] },
            { name: "Growth", price: "$449/mo", badge: "Most popular", highlight: True, features: ["12–16 posts/month","2 ad campaigns setup & monitoring","Community management (DMs/comments)","Monthly performance review call"] },
            { name: "Premium", price: "$799/mo", badge: "For aggressive growth", features: ["20+ posts/month","UGC-style video production","Advanced Meta ads & retargeting","Weekly insights & optimization"] },
          ].map((tier) => (
            <motion.div key={tier.name} className={`relative rounded-2xl bg-white p-6 flex flex-col border ${tier.highlight ? 'shadow-lg' : ''}`} style={{ borderColor: tier.highlight ? BRAND.ink : BRAND.border }} variants={fadeUp}>
              {tier.badge and (
                <div className={`absolute -top-3 left-6 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full text-white`} style={{ backgroundColor: BRAND.ink }}>{tier.badge}</div>
              )}
              <div className="text-lg font-semibold">{tier.name}</div>
              <div className="mt-2 text-3xl font-semibold">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.ink }}></span>{f}</li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="mt-6 rounded-xl px-4 py-2 text-center text-sm font-medium" style={{ backgroundColor: BRAND.ink, color: '#fff', border: `1px solid ${BRAND.border}` }}>Get Started</button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-6 text-xs text-center" style={{ color: BRAND.sub }} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          Need a custom plan (multi-location, creator collabs, or ad spend management)? <button onClick={scrollToContact} className="underline underline-offset-4">Request a custom quote</button>.
        </motion.div>
      </section>

      <section id="about" className="border-y" style={{ backgroundColor: "#F6EFE9", borderColor: BRAND.border }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for small businesses. Run by people who care.</h2>
            <p className="mt-4" style={{ color: BRAND.sub }}>We’re a Regina-based studio led by students and creators who obsess over simple content that sells. Our style is classic and professional—no gimmicks, just consistent execution that compounds.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: BRAND.border }}>
                <div className="text-sm font-semibold">Classic Aesthetic</div>
                <div className="mt-1 text-sm" style={{ color: BRAND.sub }}>Clean typography, restrained color, premium feel.</div>
              </div>
              <div className="rounded-2xl p-5 bg-white border" style={{ borderColor: BRAND.border }}>
                <div className="text-sm font-semibold">Local Insight</div>
                <div className="mt-1 text-sm" style={{ color: BRAND.sub }}>We know what resonates with Regina audiences.</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 border" style={{ borderColor: BRAND.border }}>
            <motion.img
              variants={fadeIn}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="About: studio portrait"
              className="w-full rounded-xl border object-cover mb-6"
              style={{ borderColor: BRAND.border }}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            />
            <div className="text-sm font-semibold">Our Process</div>
            <ol className="mt-3 space-y-3 text-sm">
              <li className="flex gap-3"><span className="mt-1 h-5 w-5 grid place-items-center rounded-full border text-[11px]" style={{ borderColor: BRAND.border }}>1</span> Free audit call (15 min) to align on goals</li>
              <li className="flex gap-3"><span className="mt-1 h-5 w-5 grid place-items-center rounded-full border text-[11px]" style={{ borderColor: BRAND.border }}>2</span> Strategy & content calendar within 72 hours</li>
              <li className="flex gap-3"><span className="mt-1 h-5 w-5 grid place-items-center rounded-full border text-[11px]" style={{ borderColor: BRAND.border }}>3</span> Weekly posting & engagement</li>
              <li className="flex gap-3"><span className="mt-1 h-5 w-5 grid place-items-center rounded-full border text-[11px]" style={{ borderColor: BRAND.border }}>4</span> Monthly report & optimization</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>FAQs</motion.h2>
        <motion.img
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="FAQ banner"
          className="w-full rounded-2xl border object-cover my-10"
          style={{ borderColor: BRAND.border }}
        />
        <motion.div className="mt-10 grid gap-6" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {[
            { q: "Do you work with cannabis retailers?", a: "Yes. We create compliance-conscious content that avoids product claims and follows platform rules while still driving traffic." },
            { q: "Is ad spend included?", a: "Packages include setup and management. Ad spend is billed separately and paid directly to the platform." },
            { q: "How fast can we start?", a: "After the audit call, most accounts go live within 3–5 business days with a first month calendar." },
            { q: "Can you create content on-site?", a: "Yes. Local shoots in Regina are available in Growth and Premium packages or as an add-on." },
          ].map((item, i) => (
            <motion.div key={i} className="rounded-2xl p-6 bg-white border" style={{ borderColor: BRAND.border }} variants={fadeUp}>
              <div className="font-medium">{item.q}</div>
              <div className="mt-2 text-sm leading-relaxed" style={{ color: BRAND.sub }}>{item.a}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact" style={{ backgroundColor: BRAND.ink, color: '#fff' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Request a Free Social Audit</h2>
            <p className="mt-3 text-white/80">Send your Instagram handle and goals. We’ll reply with 3 practical ideas and a sample week plan.</p>
            <div className="mt-8 text-sm text-white/80">
              <div className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white"></span> Response within 24 hours</div>
              <div className="flex items-center gap-3 mt-2"><span className="h-1.5 w-1.5 rounded-full bg-white"></span> No hard sales—just clarity</div>
              <div className="mt-4"><a href="tel:+13062610389" className="underline underline-offset-4">Call: (306) 261-0389</a></div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 border shadow" style={{ color: BRAND.ink, borderColor: BRAND.border }}>
            <div className="grid gap-4">
              <div><label className="text-sm">Name</label><input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: BRAND.border }} placeholder="Your name" /></div>
              <div><label className="text-sm">Email</label><input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: BRAND.border }} placeholder="you@company.com" /></div>
              <div><label className="text-sm">Instagram / TikTok</label><input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: BRAND.border }} placeholder="@yourhandle" /></div>
              <div><label className="text-sm">Goals</label><textarea rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: BRAND.border }} placeholder="Tell us what success looks like" /></div>
              <div className="flex gap-3">
                <button className="rounded-xl px-5 py-2 text-sm font-medium hover:opacity-90" type="submit" style={{ backgroundColor: BRAND.ink, color: '#fff' }}>Send Inquiry</button>
                <a href="tel:+13062610389" className="rounded-xl px-5 py-2 text-sm font-medium" style={{ border: `1px solid ${BRAND.border}` }}>Call Now</a>
                <span className="rounded-xl px-5 py-2 text-sm font-medium opacity-60 pointer-events-none border" style={{ border: `1px solid ${BRAND.border}` }} title="Email coming soon">Email (coming soon)</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm" style={{ color: BRAND.sub }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Market King. All rights reserved.</div>
            <div className="flex items-center gap-6"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
