import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, ChevronRight, Star, X, BarChart3, Target, Zap, LayoutDashboard, Menu, Sparkles, Database, Globe, Layers, Search, TrendingUp, MousePointer2 } from 'lucide-react';

// --- DATA CONFIGURATION ---
const PERSONAL_DETAILS = {
  name: "SOURAV KR",
  role: "Digital Marketing Specialist | SEO • AEO • GEO Analyst",
  tagline: "I help businesses grow their traffic and leads through search and paid advertising. I focus on technical SEO and the shift towards AI-powered search (AEO/GEO) to keep brands visible.",
  email: "sourus61@gmail.com",
  linkedin: "https://linkedin.com/in/sourav-rajeevan/"
};

const EXPERIENCES = [
  {
    id: 1,
    role: "SEO Analyst",
    company: "2Base Technologies",
    period: "Sept 2024 - Apr 2026",
    description: "I manage the overall SEO and GEO strategy here. I've led projects that resulted in a 44% year-over-year increase in organic traffic through technical audits and intent-based content planning."
  },
  {
    id: 2,
    role: "Digital Marketing Specialist",
    company: "Ad House Advertising",
    period: "Jul 2024 - Aug 2024",
    description: "Handled Meta and Google Ads campaigns. My focus was on creative testing and audience targeting, which helped increase our overall reach by 17%."
  },
  {
    id: 3,
    role: "Senior Digital Marketing Exec.",
    company: "Conscience Business Solutions",
    period: "Sep 2023 - Jul 2024",
    description: "Worked on ranking high-competition commercial keywords. I also built the company's WordPress website with a focus on technical SEO and fast performance."
  },
  {
    id: 4,
    role: "Freelance SEO Consultant",
    company: "Docsmart",
    period: "Sep 2022 - Sep 2023",
    description: "Performed technical SEO audits and on-page optimization. Managed ROI-driven Meta Ads for local healthcare leads."
  },
  {
    id: 5,
    role: "Digital Marketing Executive",
    company: "Capace Software Private Limited",
    period: "Mar 2022 - Sep 2022",
    description: "Managed SEO and email marketing for software products. I set up automated email sequences to nurture leads and improve conversion rates."
  },
  {
    id: 6,
    role: "Digital Mktg & Affiliate Exec.",
    company: "Snap Hub",
    period: "Dec 2021 - Mar 2022",
    description: "Built marketing funnels and managed ads for affiliate websites. I also handled WordPress SEO for multiple affiliate blogs."
  },
  {
    id: 7,
    role: "Digital Marketing Intern",
    company: "Sadupsoft",
    period: "Sep 2021 - Dec 2021",
    description: "Started with off-page link building, keyword research, and meta tag optimization. Supported the social media team with daily reporting."
  }
];

const EDUCATION = [
  { id: 1, degree: "Diploma in Digital Marketing", institution: "ExcelR Institute" },
  { id: 2, degree: "B.Com Finance", institution: "Nirmala College of Arts and Science" }
];

const LANGUAGES = ["English", "Malayalam", "Tamil", "Hindi"];

const TOOLKIT = [
  { category: "SEO Tools", tools: "SEMrush, Ahrefs, Moz, Screaming Frog, GSC, GA4, Microsoft Clarity" },
  { category: "Paid Media", tools: "Meta Ads Manager, Google Ads, LinkedIn Campaign Manager" },
  { category: "Operations", tools: "ZOHO CRM, ClickFunnels, GetResponse, My Pipeline" },
  { category: "Platforms", tools: "WordPress, Shopify, Payload CMS, Wix" }
];

const WORKS = [
  {
    id: 1,
    title: "B2B SaaS Lead Generation",
    category: "Meta Ads",
    stats: "115 Leads | ₹58.27 CPL",
    image: "image_dc390c.png",
    overview: "Focused on getting quality demo requests for software. I achieved 115 leads at an average cost of ₹58.27 by testing specific interest targeting.",
    tools: ["Meta Ads", "Zoho CRM"],
    neonAccent: "blue",
    mockupId: "meta1"
  },
  {
    id: 2,
    title: "EdTech Acquisition",
    category: "Meta Ads",
    stats: "2,050 Leads | ₹45.54 CPL",
    image: "image_dc3934.png",
    overview: "High-volume lead generation for nursing and educational courses. Scaled the budget to reach over 2,000 leads while maintaining a stable cost.",
    tools: ["Meta Ads", "A/B Testing"],
    neonAccent: "emerald",
    mockupId: "meta2"
  },
  {
    id: 3,
    title: "Niche Service Search",
    category: "Google Ads",
    stats: "400 Clicks | ₹18.06 CPC",
    image: "image_e3f31b.png",
    overview: "A targeted Google Search sprint. By using exact-match keywords and bid caps, I kept the CPC at ₹18.06 with 400 highly relevant clicks.",
    tools: ["Google Ads", "Conversion Tracking"],
    neonAccent: "fuchsia",
    mockupId: "gad_perf"
  },
  {
    id: 4,
    title: "Organic Traffic Growth",
    category: "Technical SEO",
    stats: "15.8K Clicks | 816K Impressions",
    image: "Screenshot 2026-04-14 212248.png",
    overview: "Cleaned up technical errors and indexing issues on a large site. This led to a 44% YoY increase in organic traffic from Google.",
    tools: ["GSC", "Screaming Frog"],
    neonAccent: "cyan",
    mockupId: "gsc"
  }
];

// --- EXACT UI REPLICAS BASED ON YOUR SCREENSHOTS ---

const MetaReplica1 = () => (
  <div className="w-full h-full bg-[#0d0d0d] text-zinc-400 font-sans text-[8px] flex flex-col p-3">
    <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
      <span className="font-bold flex items-center gap-1.5 text-zinc-100">
        <div className="w-4 h-4 bg-[#0866FF] rounded-md flex items-center justify-center font-black text-white text-[10px]">f</div> 
        Meta Ads Performance
      </span>
    </div>
    <div className="space-y-1">
      <div className="flex justify-between font-bold text-zinc-500 uppercase tracking-tighter border-b border-zinc-800/50 pb-1">
        <span>Campaign</span>
        <span>Results</span>
        <span>Cost</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b border-zinc-800/30">
        <span className="text-zinc-200">B2B SaaS Lead Gen</span>
        <span className="font-black text-white">115 Leads</span>
        <span className="text-cyan-400 font-black">₹58.27</span>
      </div>
      <div className="mt-4 p-2 bg-zinc-900/50 rounded flex justify-between items-center">
        <span className="text-zinc-500 uppercase">Total Spent</span>
        <span className="text-white font-bold text-[10px]">₹6,701.00</span>
      </div>
    </div>
  </div>
);

const MetaReplica2 = () => (
  <div className="w-full h-full bg-[#0d0d0d] text-zinc-400 font-sans text-[8px] flex flex-col p-3">
    <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
      <span className="font-bold flex items-center gap-1.5 text-zinc-100 uppercase tracking-widest text-[7px]">Facebook Ad Sets</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="bg-zinc-900 p-2 rounded flex flex-col items-center">
        <span className="text-zinc-500">Leads</span>
        <span className="text-white font-black text-[10px]">2,050</span>
      </div>
      <div className="bg-zinc-900 p-2 rounded flex flex-col items-center">
        <span className="text-zinc-500">Amount</span>
        <span className="text-white font-black text-[10px]">₹93.3K</span>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded flex flex-col items-center">
        <span className="text-emerald-500">Avg. CPL</span>
        <span className="text-emerald-400 font-black text-[10px]">₹45.54</span>
      </div>
    </div>
    <div className="flex-1 bg-zinc-900/30 rounded border border-zinc-800 overflow-hidden flex items-end gap-1 p-2">
       <div className="flex-1 bg-emerald-500/50 h-[80%] rounded-t-sm" />
       <div className="flex-1 bg-emerald-500 h-[60%] rounded-t-sm" />
       <div className="flex-1 bg-emerald-500/30 h-[95%] rounded-t-sm" />
       <div className="flex-1 bg-zinc-800 h-[40%] rounded-t-sm" />
    </div>
  </div>
);

const GoogleAdsReplica = () => (
  <div className="w-full h-full bg-[#0d0d0d] text-zinc-400 font-sans text-[8px] flex flex-col p-3">
    <div className="flex items-center gap-1.5 mb-5 border-b border-zinc-800 pb-2">
      <div className="w-2.5 h-2.5 bg-[#4285f4] rounded-sm"/> <span className="font-bold text-zinc-100">Google Ads Report</span>
    </div>
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="p-2 border border-zinc-800 rounded bg-zinc-900/40">
        <span className="text-zinc-500 uppercase block mb-1">Clicks</span>
        <span className="text-sm font-black text-white">400</span>
      </div>
      <div className="p-2 border border-zinc-800 rounded bg-zinc-900/40">
        <span className="text-zinc-500 uppercase block mb-1">Cost</span>
        <span className="text-sm font-black text-emerald-400">₹7,230</span>
      </div>
    </div>
    <div className="p-2 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded flex justify-between items-center">
      <span className="text-fuchsia-400 font-bold">Avg. CPC</span>
      <span className="text-fuchsia-400 font-black text-base">₹18.06</span>
    </div>
  </div>
);

const GSCReplica = () => (
  <div className="w-full h-full bg-[#0d0d0d] text-zinc-300 font-sans text-[8px] flex flex-col p-4">
    <div className="flex justify-between items-center mb-5 text-zinc-400 font-bold uppercase tracking-widest">Search Performance</div>
    <div className="flex gap-2 h-12 mb-4">
      <div className="flex-1 bg-zinc-900 border-t-2 border-[#4285f4] p-1.5"><span>Clicks</span><br/><span className="text-xs font-black">15.8K</span></div>
      <div className="flex-1 bg-zinc-900 border-t-2 border-[#8e24aa] p-1.5"><span>Impr.</span><br/><span className="text-xs font-black">816K</span></div>
    </div>
    <div className="flex-1 bg-zinc-900/50 rounded-lg relative overflow-hidden border border-zinc-800">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,80 L10,60 L20,70 L30,40 L40,75 L50,30 L60,55 L70,20 L80,45 L90,10 L100,25" fill="none" stroke="#4285f4" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
      </svg>
    </div>
  </div>
);

const MockupRenderer = ({ id }) => {
  switch(id) {
    case "gsc": return <GSCReplica />;
    case "meta1": return <MetaReplica1 />;
    case "meta2": return <MetaReplica2 />;
    case "gad_perf": return <GoogleAdsReplica />;
    default: return <GSCReplica />;
  }
};

// --- CORE UI ---

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    outline: "border-zinc-800 text-zinc-500 bg-zinc-900/40",
    neonCyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
    secondary: "bg-zinc-800 text-zinc-400 border-transparent font-bold uppercase tracking-widest text-[7px]"
  };
  return <div className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[8px] md:text-[9px] ${variants[variant] || ""} ${className}`}>{children}</div>;
};

const Card = ({ children, className = "", onClick }) => (
  <div className={`rounded-xl border border-zinc-900 bg-[#080808] text-zinc-50 transition-all duration-300 hover:border-zinc-700 ${className}`} onClick={onClick}>
    {children}
  </div>
);

const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-6 blur-[3px]'}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
};

export default function App() {
  const [activeWork, setActiveWork] = useState(null);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; }
      `}</style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/60 backdrop-blur-xl border-b border-zinc-900 h-12 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
            <div className="w-5 h-5 bg-cyan-500 text-black rounded-md flex items-center justify-center font-black text-[10px]">S</div>
            SOURAV KR
          </div>
          <div className="hidden md:flex items-center gap-6 text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">
            {['Experience', 'Snapshot', 'Works'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">{item}</button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20 relative">
        
        {/* HERO */}
        <section id="home" className="mb-20">
          <Reveal>
            <Badge variant="neonCyan" className="mb-4 py-0.5 px-2 uppercase tracking-[0.1em] font-bold border-cyan-500/20">
              Performance Analyst
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight uppercase">
              GROWING TRAFFIC <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">GENERATING LEADS.</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed font-light">
              {PERSONAL_DETAILS.tagline}
            </p>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-12 border-t border-zinc-900">
           <Reveal><h2 className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-8">Work Experience</h2></Reveal>
           <div className="space-y-3">
              {EXPERIENCES.map((exp, i) => (
                <Reveal key={i} delay={i*50}>
                   <Card className="p-5 md:p-8 group hover:bg-zinc-900/10 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row gap-6">
                      <div className="absolute top-0 left-0 w-[1.5px] h-full bg-zinc-800 group-hover:bg-cyan-500 transition-all duration-500" />
                      <div className="md:w-1/3">
                         <h3 className="text-base font-bold text-zinc-100 group-hover:text-white uppercase tracking-tight">{exp.company}</h3>
                         <p className="text-cyan-400 font-semibold text-[9px] mt-0.5 uppercase tracking-wider">{exp.role}</p>
                         <span className="text-zinc-600 text-[7px] font-bold uppercase tracking-[0.1em] mt-3 block">{exp.period}</span>
                      </div>
                      <div className="md:w-2/3 border-l border-zinc-900 md:pl-6 flex items-center">
                         <p className="text-zinc-400 text-[12px] leading-relaxed font-light">{exp.description}</p>
                      </div>
                   </Card>
                </Reveal>
              ))}
           </div>
        </section>

        {/* WORKS */}
        <section id="works" className="py-12 border-t border-zinc-900">
          <Reveal><h2 className="text-xl md:text-3xl font-black text-zinc-800 tracking-tighter mb-10 uppercase text-center">Campaign Results</h2></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKS.map((work, index) => {
              const accent = {
                  cyan: "hover:border-cyan-500/30",
                  purple: "hover:border-purple-500/30",
                  blue: "hover:border-blue-500/30",
                  emerald: "hover:border-emerald-500/30",
                  fuchsia: "hover:border-fuchsia-500/30"
              };
              return (
              <Reveal key={work.id} delay={index * 100}>
                <Card className={`group cursor-pointer overflow-hidden border-zinc-900 bg-[#0a0a0a] ${accent[work.neonAccent] || accent.cyan}`} onClick={() => { console.log('Clicked work:', work.title); setActiveWork(work); }}>
                  <div className="aspect-[16/10] bg-zinc-950 border-b border-zinc-900 p-0 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-[0.5] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                        <MockupRenderer id={work.mockupId} />
                     </div>
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white text-black p-2.5 rounded-full shadow-xl"><ExternalLink size={16} strokeWidth={3} /></div>
                     </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-sm text-zinc-100 group-hover:text-white uppercase tracking-tight">{work.title}</h3>
                    <p className="text-[7px] text-zinc-500 mt-0.5 uppercase tracking-widest font-bold">{work.category}</p>
                    <div className="mt-4 flex justify-between items-center border-t border-zinc-900 pt-4">
                       <Badge variant="outline" className="font-mono text-[7px]">{work.stats}</Badge>
                       <span className="text-[7px] text-zinc-600 font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Explorer <ChevronRight size={8} className="inline ml-0.5"/></span>
                    </div>
                  </div>
                </Card>
              </Reveal>
            )})}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex flex-col items-center gap-4">
              <p className="text-zinc-600 text-[8px] max-w-sm font-bold uppercase tracking-[0.2em] text-center">Access full documentation on Google Drive</p>
              <a href="https://drive.google.com/drive/folders/1Pcegqpqf_r6E6KLByYl06MSZzjlMXpkG?usp=sharing" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border border-cyan-500 bg-cyan-500/10 text-cyan-400 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[8px] hover:bg-cyan-500 hover:text-black transition-all">
                OPEN DRIVE <ExternalLink size={10} strokeWidth={3} />
              </a>
            </div>
          </Reveal>
        </section>

        {/* TOOLBOX & EDUCATION */}
        <section id="snapshot" className="py-12 border-t border-zinc-900">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                 <Reveal><h2 className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-6">Capabilities</h2></Reveal>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {TOOLKIT.map((t, i) => (
                      <div key={i} className="p-4 rounded-lg bg-zinc-900/20 border border-zinc-800">
                         <h4 className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest mb-1.5">{t.category}</h4>
                         <p className="text-zinc-400 text-[10px] font-light leading-relaxed">{t.tools}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="space-y-10">
                 <div>
                    <Reveal><h2 className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-6">Education</h2></Reveal>
                    <div className="space-y-4">
                       {EDUCATION.map((edu, i) => (
                         <div key={i} className="border-l border-zinc-800 pl-4">
                            <h4 className="text-zinc-100 font-bold text-[11px] uppercase">{edu.degree}</h4>
                            <p className="text-zinc-500 text-[8px] uppercase mt-0.5 tracking-widest">{edu.institution}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div>
                    <Reveal><h2 className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-3">Languages</h2></Reveal>
                    <div className="flex flex-wrap gap-2 text-[8px] text-zinc-400 font-bold">
                       {LANGUAGES.join(" • ").toUpperCase()}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-20 border-t border-zinc-900 text-center">
          <Reveal><h2 className="text-xl font-black text-zinc-800 tracking-[0.4em] mb-8 uppercase italic">Validation</h2></Reveal>
          <Card className="p-12 border-dashed border-zinc-800 bg-transparent flex flex-col items-center justify-center">
             <Sparkles size={32} className="text-zinc-900 mb-4 animate-pulse" />
             <h3 className="text-xl font-black text-zinc-800 tracking-tighter uppercase italic opacity-40">COMING SOON</h3>
          </Card>
        </section>

      </main>

      <footer className="border-t border-zinc-900 py-12 px-6 md:px-12 bg-black mt-20 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
             <div className="text-xl font-black tracking-tighter flex items-center justify-center md:justify-start gap-2.5 uppercase">
                <div className="w-6 h-6 bg-cyan-500 rounded-md" /> SOURAV KR
             </div>
             <p className="text-[7px] text-zinc-700 font-bold tracking-[0.2em] uppercase mt-2">Marketing performance data analytics.</p>
          </div>
          <div className="flex gap-8">
             <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-zinc-600 hover:text-white transition-colors uppercase font-bold text-[8px] tracking-[0.2em]">Email</a>
             <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-cyan-400 transition-colors uppercase font-bold text-[8px] tracking-[0.2em]">LinkedIn</a>
          </div>
          <div className="text-[7px] text-zinc-800 font-mono uppercase tracking-[0.4em]">© 2026 SOURAV KR</div>
        </div>
      </footer>

      {/* CASE STUDY MODAL */}
      {activeWork && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 overflow-y-auto">
          <div className={`bg-[#080808] w-full max-w-4xl my-auto rounded-2xl border border-zinc-800 shadow-2xl relative flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500`}>
            
            <button onClick={() => setActiveWork(null)} className="absolute top-5 right-5 z-30 p-2 bg-zinc-900 text-white rounded-full hover:bg-red-500 transition-all"><X size={16} /></button>
            
            <div className="p-6 md:p-12 w-full relative">
              <div className="mb-8 border-b border-zinc-900 pb-6">
                <p className={`${
                  {
                    cyan: 'text-cyan-400',
                    blue: 'text-blue-400',
                    emerald: 'text-emerald-400',
                    fuchsia: 'text-fuchsia-400'
                  }[activeWork.neonAccent] || 'text-cyan-400'
                } text-[8px] font-bold uppercase tracking-[0.3em] mb-2`}>{activeWork.category}</p>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">{activeWork.title}</h3>
                <div className={`inline-flex items-center gap-4`}>
                   <div className={`px-4 py-1 rounded-full ${
                     {
                       cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
                       blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
                       emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
                       fuchsia: 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400'
                     }[activeWork.neonAccent] || 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                   } font-mono text-xs font-bold tracking-tight uppercase`}>
                     {activeWork.stats}
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 space-y-8">
                  <div>
                    <h4 className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.3em] mb-3 border-l-2 border-zinc-800 pl-3 italic">Project Detail</h4>
                    <p className="text-zinc-400 text-base leading-relaxed font-light">{activeWork.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.3em] mb-3">Tools</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeWork.tools.map((t, i) => <span key={i} className="text-[8px] font-bold border border-zinc-800 text-zinc-500 px-3 py-1 rounded-full bg-zinc-900/50 uppercase tracking-widest">{t}</span>)}
                    </div>
                  </div>
                  {/* Replica Visual */}
                  <div>
                    <h4 className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.3em] mb-3 italic">Interactive Replica</h4>
                    <div className="w-full h-36 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-inner">
                       <MockupRenderer id={activeWork.mockupId} />
                    </div>
                  </div>
                </div>

                {/* VERIFICATION SIDEBAR */}
                <div className="w-full lg:w-[280px] shrink-0">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 shadow-xl relative overflow-hidden group/ssarea transition-all">
                    <h4 className="text-zinc-600 text-[7px] font-black uppercase tracking-[0.3em] mb-6 flex justify-between items-center border-b border-zinc-900 pb-3 font-mono">
                       SOURCE PROOF <Database size={10} className="text-zinc-800"/>
                    </h4>
                    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black aspect-square relative group/ss">
                       <img 
                         src={activeWork.image} 
                         className="w-full h-full object-contain opacity-40 group-hover/ss:opacity-100 transition-all duration-1000"
                         alt="Actual Campaign Result"
                         onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"; }}
                       />
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/ss:opacity-100 transition-opacity bg-black/60">
                          <button 
                            onClick={() => window.open(activeWork.image, '_blank')}
                            className="bg-white text-black px-4 py-2 rounded-full font-black flex items-center gap-2 text-[7px] uppercase tracking-widest shadow-xl"
                          >
                            <ExternalLink size={12} strokeWidth={3} /> FULL IMAGE
                          </button>
                       </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-6">
                       <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                          <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Platform Screenshot</span>
                       </div>
                       <button 
                         className="w-full h-10 bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-xl font-bold uppercase text-[8px] tracking-[0.2em] hover:bg-zinc-800 transition-all"
                         onClick={() => window.open(activeWork.image, '_blank')}
                       >
                         OPEN REAL FILE
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-900 bg-black flex justify-end">
               <button onClick={() => setActiveWork(null)} className="px-10 py-3 bg-zinc-50 text-black font-black uppercase text-[8px] tracking-[0.3em] hover:bg-cyan-400 transition-all rounded-full active:scale-95">COLLAPSE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
