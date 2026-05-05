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
  role: "Digital Marketing Specialist | SEO / AEO / GEO Analyst",
  tagline: "Results-driven Digital Marketing Specialist with 3+ years of experience across B2B and B2C industries. Proven track record of delivering measurable growth in organic traffic and lead generation.",
  email: "sourus61@gmail.com",
  github: "#", 
  linkedin: "https://linkedin.com/in/sourav-rajeevan/"
};

const EXPERIENCES = [
  {
    id: 1,
    role: "SEO Analyst",
    company: "2Base Technologies",
    period: "Sept 2024 - Apr 2026",
    description: "Led the SEO, AEO, and GEO strategy, delivering 44% YoY organic traffic growth. Managed technical SEO assessments, content audits, and cross-functional campaigns."
  },
  {
    id: 2,
    role: "Digital Marketing Specialist",
    company: "Ad House Advertising",
    period: "Jul 2024 - Aug 2024",
    description: "Managed SEO, PPC, and Meta Ads campaigns. Achieved a 17% increase in social media reach through platform-specific content."
  },
  {
    id: 3,
    role: "Senior Digital Marketing Exec.",
    company: "Conscience Business Solutions",
    period: "Sep 2023 - Jul 2024",
    description: "Ranked company website in the top 10 for targeted commercial keywords. Designed and developed the company WordPress website with built-in SEO architecture."
  },
  {
    id: 4,
    role: "Freelance SEO Consultant",
    company: "Docsmart",
    period: "Sep 2022 - Sep 2023",
    description: "Delivered SEO strategy, technical audits, and on-page optimization. Managed ROI-driven Meta Ads campaigns for lead generation."
  }
];

const CAPABILITIES = [
  "SEO, AEO & GEO Strategy",
  "Technical Site Audits",
  "GSC & GA4 Analytics",
  "Keyword & Gap Analysis",
  "Link Building & Outreach",
  "Meta & Google Ads",
  "WordPress & CMS",
  "Performance Reporting"
];

const EDUCATION = [
  { id: 1, degree: "Diploma in Digital Marketing", institution: "ExcelR Institute" },
  { id: 2, degree: "B.Com Finance", institution: "Nirmala College of Arts and Science" }
];

const TOOLKIT = [
  { category: "SEO & Analytics", tools: "SEMrush, Ahrefs, Moz, Screaming Frog, GSC, GA4, Microsoft Clarity" },
  { category: "Paid Advertising", tools: "Meta Ads Manager, Google Ads, LinkedIn Campaign Manager" },
  { category: "CMS Platforms", tools: "WordPress, Wix, Shopify, Payload CMS" }
];

const WORKS = [
  {
    id: 1,
    title: "B2B SaaS Technical SEO",
    category: "Search Engine Optimization",
    stats: "15.8K Clicks | 816K Impressions | 1.9% CTR",
    mockupId: "gsc",
    image: imgGsc1,
    overview: "Monitored and optimized technical SEO architecture to deliver consistent organic traffic growth over a 12-month period.",
    execution: "Conducted technical SEO assessments covering Core Web Vitals, Schema Markup, and crawlability. Utilized Google Search Console to track performance and identify indexing anomalies.",
    tools: ["Google Search Console", "Screaming Frog", "GA4", "WordPress"],
    neonAccent: "cyan"
  },
  {
    id: 2,
    title: "B2B Tech AEO & Rankings",
    category: "AI Search & Content Strategy",
    stats: "Top 3 SERP | 97.8% Organic | AI Overview Visibility",
    mockupId: "serp",
    image: imgSerp,
    overview: "Tracked and optimized search engine results page (SERP) visibility across global regions.",
    execution: "Monitored keyword positions and SERP features, maintaining 97.8% organic visibility while implementing E-E-A-T frameworks for AI Overview placements.",
    tools: ["SEMrush", "Ahrefs", "Moz", "Rank Tracker"],
    neonAccent: "purple"
  },
  {
    id: 3,
    title: "B2B Software Meta Ads",
    category: "B2B Paid Advertising",
    stats: "115 Leads | 542 Clicks | ₹6.70K Spend",
    mockupId: "meta1",
    image: imgMeta1,
    overview: "Managed focused Meta Ads campaigns for B2B software, driving high-intent leads while maintaining efficient ad spend.",
    execution: "Generated 115 leads through targeted ad sets. Carefully monitored cost per result to achieve a highly optimized CPL.",
    tools: ["Meta Ads Manager", "ZOHO CRM", "A/B Testing"],
    neonAccent: "blue"
  },
  {
    id: 4,
    title: "B2C EdTech Lead Generation",
    category: "B2C Performance Marketing",
    stats: "2,050 Leads | ₹45.54 Avg CPL | 100K+ Clicks",
    mockupId: "meta2",
    image: imgMeta2,
    overview: "Executed high-volume ROI-driven lead generation campaigns focused on minimizing Cost Per Lead (CPL).",
    execution: "Optimized ad sets to generate over 2,000 qualified leads. Conducted continuous audience refinement and competitor benchmarking.",
    tools: ["Meta Ads Manager", "GA4", "Lead Forms"],
    neonAccent: "emerald"
  },
  {
    id: 5,
    title: "B2B Enterprise Google Ads",
    category: "B2B Google Ads Management",
    stats: "1,893 Conv. | ₹2.15L Spend | 167K Impr.",
    mockupId: "gad1",
    image: imgGad1,
    overview: "Managed high-budget B2B Google Ads search campaigns focused on commercial keyword targeting.",
    execution: "Strategically allocated budget over one month, generating 1,893 conversions from 17K clicks.",
    tools: ["Google Ads", "Keyword Planner", "GA4"],
    neonAccent: "blue"
  },
  {
    id: 6,
    title: "B2B SaaS Search Scaling",
    category: "B2B Google Ads Strategy",
    stats: "109 Conv. | ₹183K Spend | ₹1.67K CPA",
    mockupId: "gad3",
    image: imgGad3,
    overview: "Optimized mid-tier B2B Google Ads accounts by continuously monitoring search terms to stabilize CPA.",
    execution: "Maintained a controlled Cost/Conv across a ₹183K budget through negative keyword pruning.",
    tools: ["Google Ads", "CPA Bidding", "Search Terms"],
    neonAccent: "cyan"
  },
  {
    id: 7,
    title: "B2C D2C Acquisition",
    category: "B2C Google Ads Optimization",
    stats: "89 Conv. | 50.1K Impr. | ₹1.17L Spend",
    mockupId: "gad2",
    image: imgGad2,
    overview: "Structured targeted B2C Google Search campaigns designed to capture active user intent.",
    execution: "Generated 89 direct conversions within a ₹1.17L budget through precise match typing and ad extensions.",
    tools: ["Google Ads", "Conversion Tracking", "GA4"],
    neonAccent: "emerald"
  },
  {
    id: 8,
    title: "B2C Niche Targeted Search",
    category: "Google Ads Strategy",
    stats: "400 Clicks | 11.2K Impr. | ₹18.06 CPC",
    mockupId: "gad5",
    image: imgGad5,
    overview: "Optimized targeted search campaigns to drive high-intent traffic while rigorously controlling CPC.",
    execution: "Maintained a low Average CPC of ₹18.06 through strict bid caps and precise long-tail keyword targeting.",
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
            {['Experience', 'Capabilities', 'Works'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="transition-all hover:text-zinc-50"
              >
                {item}
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
          {['Home', 'Experience', 'Capabilities', 'Works'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left py-6 text-2xl font-bold border-b border-zinc-800"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <main className="px-6 max-w-5xl mx-auto pt-16">
        
        {/* HERO */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center py-20 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <Reveal>
            <Badge variant="neonCyan" className="mb-6"><Sparkles size={12} className="mr-1.5"/> Performance Marketing Expert</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Scaling growth <br /> through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">strategic SEO.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mb-10 leading-relaxed font-light">
              {PERSONAL_DETAILS.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="neon" className="h-12 px-8" onClick={() => scrollTo('works')}>Explore Projects</Button>
              <Button variant="outline" className="h-12 px-6" onClick={() => window.open(PERSONAL_DETAILS.linkedin, '_blank')}>
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </Button>
            </div>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 border-t border-zinc-800/50">
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
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="py-20 border-t border-zinc-800/50">
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
        <section id="works" className="py-20 border-t border-zinc-800/50">
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
              <p className="text-zinc-600 text-[8px] max-w-sm font-bold uppercase tracking-[0.2em] text-center">Access full documentation on Google Drive</p>
              <a href="https://drive.google.com/drive/folders/1Pcegqpqf_r6E6KLByYl06MSZzjlMXpkG?usp=sharing" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border border-cyan-500 bg-cyan-500/10 text-cyan-400 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[8px] hover:bg-cyan-500 hover:text-black transition-all">
                OPEN DRIVE <ExternalLink size={10} strokeWidth={3} />
              </a>
            </div>

          </Reveal>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/50 py-12 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">© {new Date().getFullYear()} Sourav KR • Performance Marketing</div>
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
