import Link from "@/muftlo/next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Card anchor points in a 1000 x 760 canvas. Lines drop into the glowing ring.
const steps = [
  { n: "01", title: "Research", text: "Audience, market and competitor insights that reveal real opportunities.", x: 3, y: 14, ax: 310, ay: 138, ex: 400, side: "left" },
  { n: "02", title: "Planning", text: "Clear goals, budgets and a practical roadmap with measurable milestones.", x: 7, y: 33, ax: 350, ay: 300, ex: 440, side: "left" },
  { n: "03", title: "Defining", text: "Positioning, messaging and a brand voice your audience remembers.", x: 3, y: 52, ax: 310, ay: 461, ex: 470, side: "left" },
  { n: "04", title: "Designing", text: "Distinctive visuals, websites and content crafted to feel unmistakably you.", x: 69, y: 14, ax: 690, ay: 138, ex: 600, side: "right" },
  { n: "05", title: "Marketing", text: "Social, SEO and paid campaigns launched across the channels that matter.", x: 65, y: 33, ax: 650, ay: 300, ex: 560, side: "right" },
  { n: "06", title: "Growth", text: "Tracking, reporting and constant optimisation that compounds results.", x: 69, y: 52, ax: 690, ay: 461, ex: 530, side: "right" },
];

const RING_Y = 640;
const path = (s) => {
  const turn = s.ex;
  const dir = s.side === "left" ? 1 : -1;
  return `M ${s.ax} ${s.ay} L ${turn - 40 * dir} ${s.ay} Q ${turn} ${s.ay} ${turn} ${s.ay + 40} L ${turn} ${RING_Y}`;
};

const Card = ({ s, i, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
    whileHover={{ y: -4 }}
    className={`group rounded-xl border border-brand-cream/20 bg-gradient-to-br from-brand-cream/10 to-brand-cream/[0.02] p-4 shadow-[0_0_30px_-10px] shadow-brand-orange/40 backdrop-blur-md transition-colors hover:border-brand-orange/60 ${s.side === "left" ? "text-right" : "text-left"} ${className}`}
  >
    <div className={`flex items-baseline gap-2 ${s.side === "left" ? "justify-end" : ""}`}>
      <span className="text-[10px] font-semibold text-brand-cream/40">{s.n}</span>
      <h3 className="text-lg font-semibold text-brand-orange drop-shadow-[0_0_10px_rgba(247,147,30,0.6)]">{s.title}</h3>
    </div>
    <p className="mt-1 text-xs leading-relaxed text-brand-cream/65">{s.text}</p>
  </motion.div>
);

const Rings = ({ className = "" }) => (
  <g className={className}>
    <defs>
      <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f7931e" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#f7931e" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ringA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffb35c" />
        <stop offset="60%" stopColor="#ffe08a" />
        <stop offset="100%" stopColor="#f7931e" />
      </linearGradient>
      <linearGradient id="ringB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f7931e" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f7931e" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#faf7f2" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#f7931e" stopOpacity="0.1" />
      </linearGradient>
      <filter id="blurGlow" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="18" /></filter>
    </defs>
    <ellipse cx="500" cy={RING_Y + 30} rx="420" ry="150" fill="url(#ringGlow)" />
    <motion.g animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 4, repeat: Infinity }}>
      <ellipse cx="500" cy={RING_Y + 40} rx="330" ry="95" fill="none" stroke="url(#ringB)" strokeWidth="46" opacity="0.8" />
      <ellipse cx="500" cy={RING_Y} rx="280" ry="78" fill="none" stroke="#ffd27a" strokeWidth="60" filter="url(#blurGlow)" opacity="0.7" />
      <ellipse cx="500" cy={RING_Y} rx="270" ry="74" fill="none" stroke="url(#ringA)" strokeWidth="44" />
    </motion.g>
  </g>
);

const JourneySection = () => (
  <section aria-labelledby="brand-process-title" className="relative overflow-hidden bg-brand-navy px-4 py-16 text-brand-cream sm:px-6 md:py-24">
    <div className="pointer-events-none absolute left-1/2 top-2/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />
    <div className="relative mx-auto max-w-6xl">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase text-brand-orange">Work process</p>
          <motion.h2
            id="brand-process-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight text-brand-cream md:text-7xl"
          >
            How We Bring<br />Brands to Life
          </motion.h2>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-brand-cream/60 md:pt-16">
          A clear, connected process from first insight to lasting growth — turning complex business goals into brands people notice, trust and choose.
        </p>
      </div>

      {/* Desktop diagram */}
      <div className="relative mt-8 hidden aspect-[1000/850] md:block">
        <svg viewBox="0 0 1000 850" className="absolute inset-0 size-full" aria-hidden="true">
          <Rings />
          {steps.map((s, i) => (
            <g key={s.n}>
              <motion.path d={path(s)} fill="none" stroke="url(#lineGrad)" strokeWidth="1.3"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: "easeInOut" }} />
              <motion.path d={path(s)} fill="none" stroke="#ffd27a" strokeWidth="2.5" strokeLinecap="round"
                strokeDasharray="0.06 1" pathLength="1"
                animate={{ strokeDashoffset: [1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.4 }} />
            </g>
          ))}
          {/* inner ring front lip drawn over lines */}
          <path d={`M 230 ${RING_Y} A 270 74 0 0 0 770 ${RING_Y}`} fill="none" stroke="url(#ringA)" strokeWidth="44" />
        </svg>
        {steps.map((s, i) => (
          <div key={s.n} className="absolute w-[28%]" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
            <Card s={s} i={i} />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="relative mt-10 md:hidden">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-brand-cream/40 to-brand-orange/60" />
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative pl-10">
              <span className="absolute left-[11px] top-5 size-2.5 rounded-full bg-brand-orange shadow-[0_0_12px_rgba(247,147,30,0.9)]" />
              <Card s={{ ...s, side: "right" }} i={i} />
            </div>
          ))}
        </div>
        <svg viewBox="0 500 1000 350" className="mt-6 w-full" aria-hidden="true"><Rings /></svg>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-3 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-cream">
          Let’s build your next chapter <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default JourneySection;
