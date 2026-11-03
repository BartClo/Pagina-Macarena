"use client";

import { useEffect, useState } from "react";
import { content, email, phone, photos, type Item, type Lang } from "@/content";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return (
    <div ref={setEl} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Photo({ src, label, sub, className = "" }: { src: string | null; label: string; sub?: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div className={`stripes flex h-full w-full flex-col items-center justify-center bg-mist text-center ${className}`}>
      <span className="font-serif text-xl text-ink">{label}</span>
      {sub && <span className="mt-1 text-sm text-ink-soft">{sub}</span>}
    </div>
  );
}

const Chip = ({ children, filled }: { children: React.ReactNode; filled?: boolean }) => (
  <span
    className={`rounded-full px-3.5 py-1.5 text-[15px] transition-colors ${
      filled
        ? "bg-mist text-ink hover:bg-ink hover:text-white"
        : "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white"
    }`}
  >
    {children}
  </span>
);

const Eyebrow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[12px] font-semibold uppercase tracking-[0.2em] text-gold ${className}`}>{children}</p>
);

function Entry({ item }: { item: Item }) {
  return (
    <div className="group grid gap-2 border-b border-ink/10 py-7 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-8">
      <p className="pt-1.5 text-[15px] font-medium text-ink-soft">{item.period}</p>
      <div>
        <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-gold sm:text-[34px]">{item.title}</h3>
        {item.org && <p className="mt-1.5 text-[15px] font-semibold">{item.org}</p>}
        <p className="mt-2 max-w-xl text-[17px] leading-relaxed text-ink-soft">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Site() {
  const [lang, setLang] = useState<Lang>("es");
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const nav = [
    ["perfil", t.nav.perfil],
    ["trayectoria", t.nav.trayectoria],
    ["formacion", t.nav.formacion],
    ["contacto", t.nav.contacto],
  ] as const;

  return (
    <>
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-[15px] text-white">ML</span>
            <span className="text-base font-medium">Macarena Leyton</span>
          </a>
          <nav className="flex items-center gap-6">
            <ul className="hidden gap-8 text-[15px] md:flex">
              {nav.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex rounded-full border border-ink/15 bg-white p-0.5 text-sm font-semibold">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-3 py-1.5 uppercase transition-colors ${lang === l ? "bg-ink text-white" : "text-ink hover:bg-mist"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pt-40">
          <div>
            <Eyebrow className="rise">{t.hero.eyebrow}</Eyebrow>
            <h1 className="rise mt-5 font-serif text-[72px] leading-[0.95] tracking-tight sm:text-[112px]" style={{ animationDelay: "80ms" }}>
              Macarena
              <br />
              Leyton Vega
            </h1>
            <p className="rise mt-7 max-w-lg text-xl leading-relaxed text-ink-soft" style={{ animationDelay: "160ms" }}>
              {t.hero.intro}
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <a href={`mailto:${email}`} className="rounded-full bg-ink px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-[#1c2d63]">
                {t.hero.ctaMail}
              </a>
              <a href="#trayectoria" className="rounded-full border border-ink/30 px-7 py-3.5 text-base font-medium transition hover:-translate-y-0.5 hover:border-ink hover:bg-white">
                {t.hero.ctaPath}
              </a>
            </div>
          </div>
          <div className="rise relative mx-auto w-full max-w-md" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full bg-gold" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-ink/10 shadow-xl shadow-ink/10">
              <Photo src={photos.profile} label={t.hero.photo} sub={photos.profile ? undefined : "Reemplazar por una imagen"} />
            </div>
          </div>
        </section>

        {/* ACTUALMENTE */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <Eyebrow>{t.current.label}</Eyebrow>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.current.items.map((c, i) => (
                <Reveal key={i} delay={i * 90} className="border-t border-gold pt-5">
                  <h3 className="font-serif text-[27px] leading-tight">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{c.org}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL */}
        <section id="perfil" className="mx-auto grid max-w-7xl scroll-mt-20 gap-8 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="font-serif text-6xl">{t.profile.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed">{t.profile.text}</p>
            <Eyebrow className="mt-9 !text-ink-soft">{t.profile.areasLabel}</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.profile.areas.map((a) => (
                <Chip key={a}>{a}</Chip>
              ))}
            </div>
          </Reveal>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <hr className="border-ink/10" />
        </div>

        {/* TRAYECTORIA */}
        <section id="trayectoria" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
          <Reveal>
            <h2 className="font-serif text-6xl">{t.path.title}</h2>
          </Reveal>
          <div className="mt-12 space-y-16">
            {t.path.groups.map((g) => (
              <Reveal key={g.label} className="grid gap-4 border-t-2 border-ink pt-6 md:grid-cols-[260px_1fr] md:gap-10">
                <Eyebrow className="max-w-[200px] leading-relaxed">{g.label}</Eyebrow>
                <div className="-mt-7">
                  {g.items.map((it) => (
                    <Entry key={it.title} item={it} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EN TERRENO */}
        <section className="bg-mist">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <Reveal>
              <h2 className="font-serif text-6xl">{t.field.title}</h2>
              <p className="mt-3 text-ink-soft">{t.field.text}</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {t.field.captions.map((cap, i) => (
                <Reveal key={i} delay={i * 90}>
                  <figure className="group">
                    <div className="aspect-[4/5] overflow-hidden border border-ink/10 bg-white transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-ink/10">
                      <Photo src={photos.gallery[i]} label={t.field.photo} className="transition duration-700 group-hover:scale-105" />
                    </div>
                    <figcaption className="mt-3 border-t border-gold pt-2.5 text-[15px] font-medium">{cap}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FORMACIÓN + IDIOMAS */}
        <section id="formacion" className="mx-auto grid max-w-7xl scroll-mt-20 gap-16 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-6xl">{t.education.title}</h2>
            <div className="mt-8">
              {t.education.items.map((e) => (
                <div key={e.title} className="border-t border-ink/15 py-6">
                  <p className="text-[15px] font-medium text-ink-soft">{e.period}</p>
                  <h3 className="mt-1 font-serif text-[34px]">{e.title}</h3>
                  <p className="mt-1 text-[15px] font-semibold">{e.org}</p>
                  <p className="mt-1 text-[15px] text-ink-soft">{e.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif text-6xl">{t.skills.title}</h2>
            <div className="mt-8">
              {t.skills.languages.map((l) => (
                <div key={l.name} className="border-t border-ink/15 py-6">
                  <h3 className="font-serif text-[34px]">{l.name}</h3>
                  {l.desc && <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">{l.desc}</p>}
                </div>
              ))}
            </div>
            <Eyebrow className="mt-4 !text-ink-soft">{t.skills.label}</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.skills.list.map((s) => (
                <Chip key={s} filled>
                  {s}
                </Chip>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-16 bg-ink text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
            <Reveal>
              <Eyebrow>{t.contact.label}</Eyebrow>
              <h2 className="mt-4 font-serif text-6xl sm:text-7xl">{t.contact.title}</h2>
              <p className="mt-5 max-w-sm text-white/70">{t.contact.text}</p>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-3 md:items-end">
              <a href={`mailto:${email}`} className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-gold hover:text-white md:w-96">
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-gold hover:text-white md:w-96">
                {phone}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl justify-between px-6 py-6 text-sm text-ink-soft">
        <span>{t.footer.name}</span>
        <span>{t.footer.place}</span>
      </footer>
    </>
  );
}
