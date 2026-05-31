import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  X, 
  BarChart3, 
  Target, 
  Zap, 
  LayoutDashboard, 
  Menu, 
  Sparkles,
  Award,
  Globe,
  TrendingUp,
  Search
} from 'lucide-react';

// --- IMAGE ASSETS ---
const imgGsc1 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const imgSerp = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const imgMeta1 = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const imgMeta2 = "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
const imgGad1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale=true";
const imgGad2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale=true";
const imgGad3 = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale=true";
const imgGad5 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&grayscale=true";

// --- DATA ---
const PERSONAL_DETAILS = {
  name: "SOURAV KR",
  role: "Digital Marketing Specialist",
  heroSubtitle: "SEO, paid media, and AI search — built for B2B growth.",
  tagline: "3+ years driving measurable results across B2B and B2C — from 44% YoY organic growth to high-volume lead gen campaigns across Google, Meta, and LinkedIn. I work at the intersection of strategy and execution.",
  email: "sourus61@gmail.com",
  github: "#", 
  linkedin: "https://linkedin.com/in/sourav-rajeevan/"
};

const EXPERIENCES = [
  {
    id: 1,
    role: "Digital Marketing Specialist — SEO, AEO & Paid Media",
    company: "2Base Technologies",
    period: "Sep 2023 – Present",
    bullets: [
      "Delivered 44% YoY organic traffic growth through technical SEO, content strategy, and AEO/GEO optimisation.",
      "Built and maintained GSC + GA4 reporting pipelines, reducing audit turnaround by 40%.",
      "Managed B2B lead gen campaigns across Google Ads and Meta, contributing to a 17% increase in inbound SEO leads.",
      "Led AI search visibility strategy — securing AI Overview placements for targeted B2B keywords."
    ]
  },
  {
    id: 2,
    role: "Digital Marketing Specialist (Contract)",
    company: "Ad House Advertising",
    period: "Jul 2024 – Aug 2024",
    bullets: [
      "Ran SEO, PPC, and Meta Ads campaigns for agency clients.",
      "Achieved 17% increase in social media reach through platform-specific content strategy."
    ]
  },
  {
    id: 3,
    role: "Senior Digital Marketing Executive",
    company: "Conscience Business Solutions",
    period: "Sep 2023 – Jul 2024",
    bullets: [
      "Ranked company website in the top 10 for targeted commercial keywords from a standing start.",
      "Designed and built the company WordPress site with SEO architecture baked in from the ground up.",
      "Managed paid search and social campaigns, growing monthly organic sessions to 1,700+."
    ]
  },
  {
    id: 4,
    role: "Freelance SEO Consultant",
    company: "Docsmart",
    period: "Sep 2022 – Sep 2023",
    bullets: [
      "Delivered full-cycle SEO engagements — technical audits, on-page optimisation, and content planning.",
      "Ran ROI-tracked Meta Ads campaigns for lead generation, managing budget and reporting end-to-end."
    ]
  }
];

const CAPABILITIES = [
  "Technical SEO",
  "AEO & GEO",
  "AI Overview Optimisation",
  "Schema Markup",
  "Keyword & Gap Analysis",
  "Link Building",
  "Content Audits",
  "Performance Reporting",
  "Site Migrations"
];

const EDUCATION = [
  { id: 1, degree: "Diploma in Digital Marketing", institution: "ExcelR Institute" },
  { id: 2, degree: "B.Com Finance", institution: "Nirmala College of Arts and Science" }
];

const TOOLKIT = [
  { category: "SEO & AI Search", tools: "Technical SEO, AEO, GEO, AI Overview optimisation, schema markup" },
  { category: "Analytics & Reporting", tools: "GSC, GA4, Microsoft Clarity, SEMrush, Ahrefs, Screaming Frog, Moz" },
  { category: "Paid Media", tools: "Google Ads, Meta Ads Manager, LinkedIn Campaign Manager" },
  { category: "CMS & Platforms", tools: "WordPress, Wix, Shopify, Payload CMS" },
  { category: "Core Skills", tools: "Keyword & gap analysis, link building, content audits, performance reporting, site migrations" }
];

const WORKS = [
  {
    id: 1,
    title: "B2B SaaS - Technical SEO",
    category: "Search Engine Optimization",
    stats: "15.8K Clicks | 816K Impressions | 1.9% CTR",
    mockupId: "gsc",
    image: imgGsc1,
    overview: "Scaled organic visibility for a B2B software platform.",
    execution: "Inherited a site with structural technical issues and low search visibility. Led full audit, redirect mapping, and content restructure.",
    tools: ["Google Search Console", "Screaming Frog", "GA4", "WordPress"],
    neonAccent: "cyan"
  },
  {
    id: 2,
    title: "B2B Tech - AEO & AI Search",
    category: "AI Search & Content Strategy",
    stats: "Top 3 SERP | 97.8% Organic Share | AI Overview Placement",
    mockupId: "serp",
    image: imgSerp,
    overview: "Achieved top-3 SERP ranking and AI Overview visibility.",
    execution: "Developed an AEO content strategy targeting question-based queries. Optimised for AI search surfaces alongside traditional rankings.",
    tools: ["SEMrush", "Ahrefs", "Moz", "Rank Tracker"],
    neonAccent: "purple"
  },
  {
    id: 3,
    title: "B2B - Meta Ads",
    category: "B2B Paid Advertising",
    stats: "115 Leads | 542 Clicks | ₹6.7K Spend",
    mockupId: "meta1",
    image: imgMeta1,
    overview: "Lead generation campaign for B2B software.",
    execution: "Built and managed a Meta Ads funnel targeting decision-makers in the SMB segment. Focused on CPL efficiency on a tight budget.",
    tools: ["Meta Ads Manager", "ZOHO CRM", "A/B Testing"],
    neonAccent: "blue"
  },
  {
    id: 4,
    title: "B2C - EdTech Lead Generation",
    category: "B2C Performance Marketing",
    stats: "2,050 Leads | ₹45.54 Avg CPL | 100K+ Clicks",
    mockupId: "meta2",
    image: imgMeta2,
    overview: "High-volume lead gen for an EdTech platform.",
    execution: "Managed multi-channel paid campaigns at scale. Optimised for CPL with audience segmentation and creative iteration.",
    tools: ["Meta Ads Manager", "GA4", "Lead Forms"],
    neonAccent: "emerald"
  },
  {
    id: 5,
    title: "B2B - Google Ads",
    category: "B2B Google Ads Management",
    stats: "1,893 Conversions | ₹2.15L Spend | 167K Impressions",
    mockupId: "gad1",
    image: imgGad1,
    overview: "Enterprise Google Ads management for B2B software.",
    execution: "Managed a high-spend Google Ads account, optimising for conversion volume while controlling CPA across multiple campaign types.",
    tools: ["Google Ads", "Keyword Planner", "GA4"],
    neonAccent: "blue"
  },
  {
    id: 6,
    title: "B2B SaaS - Google Ads",
    category: "B2B Google Ads Strategy",
    stats: "109 Conversions | ₹1.67K CPA | ₹1.83L Spend",
    mockupId: "gad3",
    image: imgGad3,
    overview: "Search scaling for a B2B SaaS product.",
    execution: "Rebuilt campaign structure and bidding strategy to improve CPA efficiency while scaling conversion volume.",
    tools: ["Google Ads", "CPA Bidding", "Search Terms"],
    neonAccent: "cyan"
  },
  {
    id: 7,
    title: "B2C - D2C Google Ads",
    category: "B2C Google Ads Optimization",
    stats: "89 Conversions | 50.1K Impressions | ₹1.17L Spend",
    mockupId: "gad2",
    image: imgGad2,
    overview: "Acquisition campaign for a D2C brand.",
    execution: "Ran targeted Google Ads campaigns for a direct-to-consumer brand, focusing on acquisition efficiency at moderate spend.",
    tools: ["Google Ads", "Conversion Tracking", "GA4"],
    neonAccent: "emerald"
  },
  {
    id: 8,
    title: "B2C - Niche Search",
    category: "Google Ads Strategy",
    stats: "400 Clicks | 11.2K Impressions | ₹18.06 CPC",
    mockupId: "gad5",
    image: imgGad5,
    overview: "Low-CPC niche search campaign.",
    execution: "Built a tightly targeted search campaign for a niche B2C product, prioritising relevance and cost efficiency.",
    tools: ["Google Ads", "Bid Strategies", "GA4"],
    neonAccent: "fuchsia"
  }
];

// --- SHADCN-STYLE UI COMPONENTS ---

const Badge = ({ children, variant = "default", className = "" }) => {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2";
  const variants = {
    default: "border-transparent bg-zinc-50 text-zinc-900 hover:bg-zinc-50/80",
    secondary: "border-transparent bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80",
    outline: "text-zinc-50 border-zinc-800",
    neonCyan: "border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]",
    neonFuchsia: "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.2)]",
    neonEmerald: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
  };
  const selectedVariant = variants[variant] || variants.default;
  return <div className={`${base} ${selectedVariant} ${className}`}>{children}</div>;
};

const Card = ({ children, className = "", neonHover = false, onClick }) => {
  const hoverClass = neonHover 
    ? "hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300" 
    : "hover:border-zinc-700 transition-colors";
  
  return (
    <div className={`rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm text-zinc-50 shadow-sm ${hoverClass} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

const Button = ({ children, variant = "default", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const variants = {
    default: "bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 h-10 px-4 py-2",
    outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 hover:text-zinc-50 text-zinc-300 h-10 px-4 py-2",
    ghost: "hover:bg-zinc-800 hover:text-zinc-50 text-zinc-400 h-10 px-4 py-2",
    neon: "border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] h-10 px-4 py-2 transition-all duration-300"
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

// --- DASHBOARD REPLICA COMPONENTS ---

const GSCMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] text-zinc-300 p-4 font-sans text-xs flex flex-col select-none relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4285f4] to-transparent opacity-50"></div>
    <div className="flex justify-between items-center mb-4 relative z-10">
      <span className="text-sm font-semibold text-zinc-100 flex items-center gap-2"><BarChart3 size={16} className="text-[#4285f4] drop-shadow-[0_0_5px_rgba(66,133,244,0.5)]" /> Search results</span>
      <span className="text-[10px] bg-zinc-900/80 px-2 py-1 rounded border border-zinc-800 text-zinc-400">Last 12 months ▼</span>
    </div>
    <div className="grid grid-cols-4 gap-2 mb-4 relative z-10">
      <div className="border border-zinc-800 border-t-2 border-t-[#4285f4] p-3 rounded bg-zinc-900/50">
        <span className="text-zinc-500 block">Clicks</span><span className="text-lg font-bold text-zinc-100">15.8K</span>
      </div>
      <div className="border border-zinc-800 border-t-2 border-t-[#8e24aa] p-3 rounded bg-zinc-900/50">
        <span className="text-zinc-500 block">Impr.</span><span className="text-lg font-bold text-zinc-100">816K</span>
      </div>
      <div className="border border-zinc-800 border-t-2 border-t-[#0f9d58] p-3 rounded bg-zinc-900/50 hidden sm:block">
        <span className="text-zinc-500 block">CTR</span><span className="text-lg font-bold text-zinc-100">1.9%</span>
      </div>
      <div className="border border-zinc-800 border-t-2 border-t-[#e65100] p-3 rounded bg-zinc-900/50">
        <span className="text-zinc-500 block">Pos.</span><span className="text-lg font-bold text-zinc-100">45.6</span>
      </div>
    </div>
    <div className="flex-1 relative bg-zinc-900/30 rounded border border-zinc-800 overflow-hidden z-10">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,90 Q10,70 20,80 T40,60 T60,50 T80,30 T100,40 L100,100 L0,100 Z" fill="#4285f4" fillOpacity="0.1" />
        <path d="M0,90 Q10,70 20,80 T40,60 T60,50 T80,30 T100,40" fill="none" stroke="#4285f4" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  </div>
);

const SERPMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] text-zinc-300 p-4 font-sans flex gap-4 select-none relative overflow-hidden">
    <div className="w-1/3 flex flex-col gap-4 relative z-10">
      <div className="bg-zinc-900/60 p-3 border border-zinc-800 rounded-md">
        <h4 className="font-semibold text-zinc-100 mb-2 text-xs flex items-center gap-1.5"><Target size={12} className="text-cyan-400" /> Geography</h4>
        <div className="text-[10px] space-y-1.5">
          <div className="flex justify-between items-center bg-cyan-950/30 border border-cyan-900/50 text-cyan-100 p-1 rounded"><span>Worldwide</span><span>20</span></div>
          <div className="flex justify-between items-center px-1"><span>India</span><span>20</span></div>
          <div className="flex justify-between items-center px-1"><span>USA</span><span>14</span></div>
        </div>
      </div>
    </div>
    <div className="w-2/3 bg-zinc-900/60 p-4 border border-zinc-800 rounded-md flex flex-col relative z-10">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-zinc-100 text-xs flex items-center gap-1.5"><LayoutDashboard size={12} className="text-zinc-400"/> Traffic</h4>
        <span className="text-[10px] text-emerald-400 font-semibold">+14.2%</span>
      </div>
      <div className="flex-1 relative bg-zinc-950 rounded border border-zinc-800 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,70 Q25,40 50,60 T100,20 L100,100 L0,100 Z" fill="#22d3ee" fillOpacity="0.1" />
          <path d="M0,70 Q25,40 50,60 T100,20" fill="none" stroke="#22d3ee" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  </div>
);

const MetaAdsMockup = ({ title, results, spent, campaigns }) => (
  <div className="w-full h-full bg-[#0a0a0a] text-zinc-300 p-4 font-sans flex flex-col select-none relative overflow-hidden">
    <div className="bg-zinc-900/60 flex-1 border border-zinc-800 rounded-md overflow-hidden flex flex-col shadow-2xl relative z-10">
      <div className="border-b border-zinc-800 p-2.5 px-3 flex justify-between items-center bg-zinc-950/80">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#0866FF] text-white rounded flex items-center justify-center font-bold text-xs">f</div>
          <span className="font-semibold text-xs text-zinc-100">{title}</span>
        </div>
      </div>
      <div className="flex-1 text-[10px] p-2 space-y-2">
        {campaigns.map((camp, i) => (
          <div key={i} className="flex border-b border-zinc-800/50 py-1 items-center">
            <div className="w-2/5 truncate font-medium text-blue-400">{camp.name}</div>
            <div className="w-1/5 text-right text-zinc-100">{camp.results}</div>
            <div className="w-2/5 text-right text-emerald-400">{camp.spent}</div>
          </div>
        ))}
      </div>
      <div className="bg-zinc-950/80 p-2 border-t border-zinc-800 flex justify-between text-[10px]">
        <div className="text-zinc-500">Totals:</div>
        <div className="text-zinc-100 font-bold">{results} Results</div>
        <div className="text-emerald-400 font-bold">{spent}</div>
      </div>
    </div>
  </div>
);

const GoogleAdsMockup = ({ title, clicks, conv, cost }) => (
  <div className="w-full h-full bg-[#0a0a0a] text-zinc-300 p-4 font-sans flex flex-col select-none relative overflow-hidden">
    <div className="flex justify-between items-center mb-3 pb-2 border-b border-zinc-800">
      <span className="text-xs text-zinc-100 font-semibold">{title}</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-3">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded p-2 border-t-[#4285f4]">
        <span className="text-[9px] text-zinc-500 block">Clicks</span>
        <span className="text-xs font-bold">{clicks}</span>
      </div>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded p-2 border-t-[#fbbc04]">
        <span className="text-[9px] text-zinc-500 block">Conv.</span>
        <span className="text-xs font-bold">{conv}</span>
      </div>
      <div className="bg-zinc-900/50 border border-zinc-800 rounded p-2 border-t-[#34a853]">
        <span className="text-[9px] text-zinc-500 block">Cost</span>
        <span className="text-xs font-bold text-emerald-400">{cost}</span>
      </div>
    </div>
    <div className="flex-1 bg-zinc-950 rounded border border-zinc-800 overflow-hidden relative">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,80 L20,40 L40,70 L60,30 L80,50 L100,10 L100,100 L0,100 Z" fill="#4285f4" fillOpacity="0.1" />
        <path d="M0,80 L20,40 L40,70 L60,30 L80,50 L100,10" fill="none" stroke="#4285f4" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  </div>
);

const MockupRenderer = ({ id }) => {
  switch(id) {
    case "gsc": return <GSCMockup />;
    case "serp": return <SERPMockup />;
    case "meta1": return <MetaAdsMockup title="Software Demo" results="115" spent="₹6.7K" campaigns={[{name: "ERP Form", results: "64", spent: "₹3.2K"}, {name: "Trial", results: "38", spent: "₹2.1K"}]} />;
    case "meta2": return <MetaAdsMockup title="EdTech Growth" results="2,050" spent="₹93.3K" campaigns={[{name: "Data Sci", results: "850", spent: "₹38K"}, {name: "Full Stack", results: "720", spent: "₹32K"}]} />;
    case "gad1": return <GoogleAdsMockup title="Enterprise Search" clicks="17K" conv="1,893" cost="₹2.15L" />;
    case "gad3": return <GoogleAdsMockup title="SaaS Scaling" clicks="5.1K" conv="109" cost="₹1.83L" />;
    case "gad2": return <GoogleAdsMockup title="D2C Acq" clicks="2.8K" conv="89" cost="₹1.17L" />;
    case "gad5": return <GoogleAdsMockup title="Niche Search" clicks="400" conv="₹18 CPC" cost="₹7.2K" />;
    default: return <GSCMockup />;
  }
};

// --- SCROLL REVEAL WRAPPER ---
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- TAILWIND DYNAMIC CLASS FIXES ---
const accentBorder = {
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
  purple: "border-purple-500/20 hover:border-purple-500/50",
  blue: "border-blue-500/20 hover:border-blue-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
  fuchsia: "border-fuchsia-500/20 hover:border-fuchsia-500/50",
};

const modalBorder = {
  cyan: "border-cyan-500/30",
  purple: "border-purple-500/30",
  blue: "border-blue-500/30",
  emerald: "border-emerald-500/30",
  fuchsia: "border-fuchsia-500/30",
};

const textAccent = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  fuchsia: "text-fuchsia-400",
};

const statsAccent = {
  cyan: "border-cyan-500/20 bg-cyan-500/10",
  purple: "border-purple-500/20 bg-purple-500/10",
  blue: "border-blue-500/20 bg-blue-500/10",
  emerald: "border-emerald-500/20 bg-emerald-500/10",
  fuchsia: "border-fuchsia-500/20 bg-fuchsia-500/10",
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeWork, setActiveWork] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#050505]/70 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="px-6 h-16 flex justify-between items-center max-w-7xl mx-auto">
          <div onClick={() => scrollTo('home')} className="text-lg font-bold tracking-tight cursor-pointer flex items-center gap-2">
            <div className="w-6 h-6 bg-cyan-500 text-black rounded flex items-center justify-center text-xs font-black">S</div>
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">SOURAV</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {[{label: 'Experience', id: 'experience'}, {label: 'Capabilities', id: 'capabilities'}, {label: 'Work', id: 'works'}].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="transition-all hover:text-zinc-50"
              >
                {item.label}
              </button>
            ))}
            <Button variant="neon" className="h-8 px-3" onClick={() => window.open(PERSONAL_DETAILS.linkedin, '_blank')}>
              Connect
            </Button>
          </div>
          <Button variant="ghost" className="md:hidden px-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={20} />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col pt-20 px-6">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 text-zinc-400"><X size={24} /></button>
          {[{label: 'Home', id: 'home'}, {label: 'Experience', id: 'experience'}, {label: 'Capabilities', id: 'capabilities'}, {label: 'Work', id: 'works'}].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-left py-6 text-2xl font-bold border-b border-zinc-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <main className="px-6 max-w-5xl mx-auto pt-16">
        
        {/* HERO */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center py-20 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <Reveal>
            <Badge variant="neonCyan" className="mb-6"><Sparkles size={12} className="mr-1.5"/> {PERSONAL_DETAILS.role}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              {PERSONAL_DETAILS.heroSubtitle.split(' — ')[0]} —<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{PERSONAL_DETAILS.heroSubtitle.split(' — ')[1]}</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mb-10 leading-relaxed font-light">
              {PERSONAL_DETAILS.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="neon" className="h-12 px-8" onClick={() => scrollTo('works')}>Explore Work</Button>
              <Button variant="outline" className="h-12 px-6" onClick={() => window.open(PERSONAL_DETAILS.linkedin, '_blank')}>
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </Button>
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 border-t border-zinc-800/50 scroll-mt-16">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
            <div className="flex flex-col gap-4">
              {EXPERIENCES.map((exp) => (
                <Card key={exp.id} neonHover className="p-6 md:p-8 flex flex-col md:flex-row gap-6 group">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-zinc-100">{exp.company}</h3>
                    <p className="text-sm text-cyan-400/80 font-mono mt-1">{exp.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-semibold text-zinc-300 group-hover:text-white transition-colors">{exp.role}</h4>
                    <ul className="mt-3 space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2">
                          <ChevronRight size={14} className="text-cyan-500/60 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="py-20 border-t border-zinc-800/50 scroll-mt-16">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Toolkit & Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-wrap gap-2 content-start">
                {CAPABILITIES.map((skill, i) => (
                  <Badge key={i} variant="outline" className="px-4 py-2 text-sm">{skill}</Badge>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {TOOLKIT.map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-zinc-100 font-bold text-sm mb-1">{item.category}</h4>
                    <p className="text-zinc-500 text-xs">{item.tools}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* WORKS */}
        <section id="works" className="py-20 border-t border-zinc-800/50 scroll-mt-16">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-zinc-500 mb-12">Measurable outcomes from data-driven campaigns.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WORKS.map((work) => (
                <Card 
                  key={work.id} 
                  className={`group cursor-pointer overflow-hidden transition-all duration-500 ${accentBorder[work.neonAccent] || accentBorder.cyan}`}
                  onClick={() => setActiveWork(work)}
                >
                  <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center p-4">
                    <div className="scale-75 md:scale-90 w-full h-full">
                       <MockupRenderer id={work.mockupId} />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/10 p-3 rounded-full border border-white/20"><ExternalLink size={24}/></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${textAccent[work.neonAccent] || textAccent.cyan} text-[10px] font-bold tracking-widest uppercase mb-1`}>{work.category}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{work.title}</h3>
                    <div className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-1 rounded inline-block">
                      {work.stats}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
              <p className="text-zinc-500 text-sm max-w-md text-center">Access full campaign documentation on Google Drive</p>
              <a href="https://drive.google.com/drive/folders/1Pcegqpqf_r6E6KLByYl06MSZzjlMXpkG?usp=sharing" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border border-cyan-500 bg-cyan-500/10 text-cyan-400 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cyan-500 hover:text-black transition-all">
                OPEN DRIVE <ExternalLink size={14} strokeWidth={2.5} />
              </a>
            </div>

          </Reveal>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/50 py-12 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">© {new Date().getFullYear()} Sourav KR — Digital Marketing Specialist</div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:text-cyan-400">{PERSONAL_DETAILS.email}</a>
            <a href={PERSONAL_DETAILS.linkedin} target="_blank" className="hover:text-cyan-400">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* WORK MODAL */}
      {activeWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className={`bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border relative p-6 md:p-10 ${modalBorder[activeWork.neonAccent] || modalBorder.cyan}`}>
            <button 
              onClick={() => setActiveWork(null)}
              className="absolute top-6 right-6 p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-8">
              <p className={`${textAccent[activeWork.neonAccent] || textAccent.cyan} font-bold text-xs uppercase tracking-widest mb-2`}>{activeWork.category}</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{activeWork.title}</h3>
              <div className={`inline-block border px-4 py-2 rounded-lg ${statsAccent[activeWork.neonAccent] || statsAccent.cyan}`}>
                <span className="font-mono text-sm text-white font-bold">{activeWork.stats}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Search size={14} /> Overview
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">{activeWork.overview}</p>
                </div>
                <div>
                  <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Zap size={14} /> Execution
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">{activeWork.execution}</p>
                </div>
                <div>
                  <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-4">Toolkit</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeWork.tools.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Evidence</h4>
                <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                  <img src={activeWork.image} className="w-full h-auto opacity-80" alt="Result screenshot" />
                </div>
                <Button onClick={() => setActiveWork(null)} className="w-full h-12">Close Details</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
