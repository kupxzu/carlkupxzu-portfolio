import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Send,
  Terminal,
  Code,
  Zap,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Database,
  Cpu,
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Map Marker styling using Tailwind CSS
const customMapIcon = L.divIcon({
  className: 'custom-map-marker',
  html: `<div class="relative flex items-center justify-center">
          <div class="absolute w-10 h-10 bg-primary/30 rounded-full animate-ping"></div>
          <div class="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-[0_0_15px_#81ecff] relative z-10"></div>
         </div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-primary/10 py-4' : 'bg-transparent py-6'
      }`}>
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        <a className="text-2xl font-black tracking-tighter text-white font-headline" href="#home">KUPXZU</a>

        <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tighter">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a className="hidden sm:block bg-primary text-on-primary px-6 py-2 rounded-md font-headline font-bold text-sm tracking-tight hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all active:scale-95 duration-200" href="#contact">
            Click Me
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container-high border-b border-primary/10 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6 font-headline font-bold tracking-tighter">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  className="text-xl text-on-surface-variant hover:text-primary"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a className="bg-primary text-on-primary px-6 py-4 rounded-md text-center" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Click Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const codeText = `class Developer {
  name = "carl angelo supan";
  location = "Tuguegarao City";
  exp = "3 Years";
  specialty = ["Inertia", "Laravel", "Django", 
  "TensorFlow" ,"GIT - CI/CD"];
  focus = "Machine Learning";
  
  status() {
    return "Optimizing systems...";
  }
}`;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + codeText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeText]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-20 relative overflow-hidden" id="home">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-20"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-tertiary-container/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-8 z-10"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center space-x-3 bg-surface-container-high px-4 py-2 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary ">hello world
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold text-5xl md:text-8xl leading-[0.9] tracking-tighter text-white mb-8 text-glow">
            BUILDING <br /> <span className="text-primary">RELIABLE</span> <br /> SYSTEMS
          </h1>

          {/* Narrative */}
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 font-body">
            I&apos;m a full-stack developer with 3 years of crafting high-performance systems and currently evolving through
            <span className="text-primary italic"> Machine Learning.</span>
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a className="bg-primary text-on-primary px-10 py-5 rounded-md font-headline font-extrabold text-lg tracking-tight hover:bg-primary-dim transition-all group flex items-center justify-center" href="#projects">
              Deployments
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <a className="bg-surface-container-high text-primary px-10 py-5 rounded-md font-headline font-extrabold text-lg tracking-tight hover:bg-surface-container-highest transition-all flex items-center justify-center border border-white/5" href="#about">
              Tech Stack
            </a>
          </div>
        </motion.div>

        {/* Technical Side Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block lg:col-span-4 relative"
        >
          <div className="aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden relative border border-white/10 group shadow-2xl">
            {/* Code Overlay - Gives it that hacker/dev aesthetic */}
            <div className="absolute inset-0 p-6 font-mono text-[0.65rem] text-primary/40 opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none overflow-hidden leading-tight">
              <code className="whitespace-pre">
                {displayedText}
                <span className="animate-pulse">|</span>
              </code>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={14} className="text-primary" />
                <span className="font-label text-[0.65rem] text-primary tracking-widest uppercase">System Terminal</span>
              </div>
              <div className="h-[1px] w-full bg-primary/20 mb-4"></div>
              <p className="font-headline text-white font-bold leading-tight uppercase">Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {


  return (
    <section className="py-32 px-8 bg-surface-container-low border-y border-white/5" id="projects">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:ml-[10%]">
          <span className="font-label text-primary text-[0.75rem] uppercase tracking-widest mb-4 block">Deployed Systems</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white max-w-4xl uppercase">
            Practical <span className="text-primary italic">Systems</span> Built to Grow.
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 1. Hospital: Admitting & Billing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative bg-surface-container overflow-hidden border-t border-primary/20 transition-all duration-500 hover:bg-surface-container-highest"
          >
            <div className="aspect-video w-full overflow-hidden bg-slate-900 flex items-center justify-center relative">
              {/* Representative Visual for Billing System */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#81ecff_1px,transparent_1px)] [background-size:30px_30px]"></div>
              <img
                alt="Hospital Billing Platform"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={`${import.meta.env.BASE_URL}billing.png`}
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-label text-[0.65rem] text-primary uppercase tracking-widest">Enterprise / Healthcare</span>
                  <h3 className="font-headline text-3xl font-bold text-white tracking-tight mt-1">Billing & Admitting Platform</h3>
                </div>
                <Zap className="text-primary group-hover:rotate-45 transition-transform" size={28} />
              </div>
              <p className="text-on-surface-variant max-w-2xl mb-6 leading-relaxed">
                A comprehensive hospital management solution. Developed with **Inertia.js** to provide a seamless single-page experience
                while maintaining robust Laravel-driven business logic for real-time patient billing and operational data.
              </p>
              <div className="flex flex-wrap gap-2">
                {['LARAVEL', 'INERTIA', 'REACT', 'MYSQL', 'OPERATIONAL'].map(tag => (
                  <span key={tag} className="font-label text-[9px] bg-surface-container-lowest text-primary px-3 py-1 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. Veterinary Clinic System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative bg-surface-container overflow-hidden border-t border-secondary/20 transition-all duration-500 hover:bg-surface-container-highest"
          >
            <div className="aspect-square w-full overflow-hidden bg-slate-800">
              <img
                alt="Veterinary System"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src={`${import.meta.env.BASE_URL}vet.png`}
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Vet Management</h3>
                <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
              </div>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Scalable API-first management system for veterinary clinics. Built using **Laravel API** architecture
                to ensure fast data retrieval and secure patient records.
              </p>
              <div className="flex flex-wrap gap-2">
                {['REST API', 'VUE', 'LARAVEL', 'PDO'].map(tag => (
                  <span key={tag} className="font-label text-[9px] bg-surface-container-lowest text-primary px-3 py-1 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Django/Python Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-surface-container overflow-hidden border-t border-white/10 transition-all duration-500 hover:bg-surface-container-highest"
          >
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Database className="text-primary" size={32} />
                  <div className="flex gap-2">
                    <span className="text-[10px] text-on-surface-variant border border-white/10 px-2 py-1">LARAVEL</span>
                    <span className="text-[10px] text-on-surface-variant border border-white/10 px-2 py-1">DJANGO</span>
                  </div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">Backend & APIs</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  Building fast, reliable backends and REST APIs using **Laravel** and **Django**. Specialized in connecting databases, web apps, and mobile frontends smoothly.
                </p>
              </div>
              <button className="text-primary font-label text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Technical Documentation <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* 4. Legacy/Core PHP Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-[#111] p-8 border border-white/5 flex flex-col justify-center relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-xs">
              SELECT * FROM core_systems;
            </div>
            <h3 className="font-headline text-xl font-bold text-white mb-4">Core Runtime Development</h3>
            <div>
              <span className="font-label text-primary text-xs uppercase tracking-widest block mb-2">
                Core Runtimes & Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {['NODE.JS', 'RUST', 'PHP', 'PYTHON', 'TYPESCRIPT'].map((tech) => (
                  <span
                    key={tech}
                    className="text-primary font-mono text-xs bg-primary/10 border border-primary/20 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const skills = [
    { name: 'Interface Architecture', level: 98 },
    { name: 'Frontend Engineering', level: 92 },
    { name: 'Design Systems', level: 95 },
  ];

  const stack = [
    'REACT',
    'VUE',
    'TYPESCRIPT',
    'TAILWIND CSS',
    'SHADCN',
    'NODE.JS',
    'DJANGO',
    'LARAVEL',
    'INERTIA',
    'DOCKER',
    'FLUTTER',
    'GIT - CI/CD',
    'EXPRESS',
    'TENSORFLOW'

  ];
  return (
    <section className="py-32 overflow-x-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Profile Identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-surface-container-high aspect-[4/5] rounded-xl overflow-hidden border border-primary/20">
              <img
                alt="CARL ANGELO SUPAN"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background to-transparent">
                <span className="font-label text-primary text-xs tracking-widest uppercase">FULL-STACK DEVELOPER</span>
                <h2 className="font-headline text-2xl font-bold mt-1">C.A SUPAN (CAS)</h2>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden xl:block">
              <div className="bg-surface-container-lowest p-6 border border-primary/30 rounded-lg shadow-2xl backdrop-blur-md">
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-8">
                    <span className="font-label text-[0.65rem] text-on-surface-variant uppercase">Experience</span>
                    <span className="font-label text-[0.65rem] text-primary">3+ Years</span>
                  </div>
                  <div className="flex justify-between items-center gap-8">
                    <span className="font-label text-[0.65rem] text-on-surface-variant uppercase">Location</span>
                    <span className="font-label text-[0.65rem] text-primary">TUGUEGARAO CITY, PH</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-2">
              <span className="font-label text-primary tracking-[0.4em] uppercase text-xs">My Journey</span>
              <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary-container">Solid</span> Apps & Web Systems.
              </h2>
            </div>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              <p>
                I&apos;m a full-stack developer who loves turning complex business problems into clean, easy-to-use web and mobile applications. I focus on making things run smoothly from the database back-end all the way to the user interface.
              </p>
              <p>
                Over the past three years, I&apos;ve built practical tools and real-world platforms, including hospital billing systems and management software that real people rely on daily.
              </p>
              <p>
                Right now, I&apos;m learning and diving deeper into <span className="text-on-surface font-semibold italic">Machine Learning</span>—exploring how to make smarter apps that can automate tasks and solve everyday problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest px-6 py-3 rounded-md transition-all group border border-white/5">
                <span className="font-label text-sm uppercase tracking-widest text-on-surface">Download CV</span>
                <Download className="text-primary group-hover:translate-y-1 transition-transform" size={20} />
              </button>
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-label uppercase tracking-widest opacity-70">Active</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-4">
              <span className="font-label text-primary tracking-widest uppercase text-xs">Technical Arsenal</span>
              <h3 className="font-headline text-4xl font-bold tracking-tight">System Capabilities</h3>
              <p className="text-on-surface-variant font-body">A breakdown of my technical proficiency across the product lifecycle.</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-10">
              {skills.map(skill => (
                <div key={skill.name} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-headline font-bold text-lg uppercase tracking-wider">{skill.name}</span>
                    <span className="font-label text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-primary shadow-[0_0_15px_#81ecff]"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h4 className="font-label text-on-surface-variant text-xs uppercase tracking-widest border-l-2 border-primary pl-4">Operational Stack</h4>
              <div className="flex flex-wrap gap-3">
                {stack.map(item => (
                  <div key={item} className="bg-surface-container-lowest border border-outline-variant/30 px-4 py-2 rounded-md font-label text-sm text-primary transition-all hover:border-primary/50 hover:bg-surface-container-highest">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

const Contact = () => {
  // Tuguegarao City Coordinates
  const position: [number, number] = [17.6132, 121.7270];

  return (
    <section className="py-32 px-8 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="font-label text-primary tracking-[0.3em] text-[0.75rem] uppercase mb-4 block">Collaborate</span>
          <h2 className="font-headline text-[3.5rem] md:text-7xl font-bold leading-[1.1] tracking-tighter text-white mb-6 max-w-3xl">
            Let's work on a <span className="text-primary">project</span> together.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Got an idea, a question, or a project in mind? Drop me a message and I'll get back to you soon.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-surface-container-highest/30 p-8 md:p-12 relative overflow-hidden rounded-xl border border-white/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary transition-colors">Name</label>
                <input className="w-full bg-transparent border-none p-4 text-on-surface focus:ring-0 placeholder:text-outline/40 font-body transition-all" placeholder="Enter your name" type="text" />
                <div className="h-[1px] w-full bg-outline-variant group-focus-within:bg-primary transition-all duration-500"></div>
              </div>
              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary transition-colors">Email</label>
                <input className="w-full bg-transparent border-none p-4 text-on-surface focus:ring-0 placeholder:text-outline/40 font-body transition-all" placeholder="email@example.com" type="email" />
                <div className="h-[1px] w-full bg-outline-variant group-focus-within:bg-primary transition-all duration-500"></div>
              </div>
              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 group-focus-within:text-primary transition-colors">Message</label>
                <textarea className="w-full bg-transparent border-none p-4 text-on-surface focus:ring-0 placeholder:text-outline/40 font-body transition-all resize-none" placeholder="Describe your project vision..." rows={5}></textarea>
                <div className="h-[1px] w-full bg-outline-variant group-focus-within:bg-primary transition-all duration-500"></div>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-headline font-extrabold text-sm uppercase tracking-widest rounded-md hover:bg-primary-dim transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_30px_rgba(129,236,255,0.15)]" type="submit">
                  NOTIFY
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Technical Info */}
          <aside className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-12">
              <div className="group">
                <span className="font-label text-primary text-[0.7rem] tracking-widest uppercase mb-4 block">Electronic Mail</span>
                <a className="font-headline text-2xl font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-3 break-all" href="mailto:carlanjilo.supan@gmail.com">
                  carlanjilo.supan@gmail.com
                  <ArrowUpRight className="text-primary group-hover:translate-x-1 transition-transform shrink-0" size={24} />
                </a>
              </div>

              <div className="group">
                <span className="font-label text-primary text-[0.7rem] tracking-widest uppercase mb-4 block">Geolocation</span>
                <div className="font-headline text-2xl font-bold text-white">
                  17.6132° N, 121.7270° E<br />
                  <span className="text-on-surface-variant font-medium text-lg uppercase tracking-wider">Tuguegarao City, PH</span>
                </div>
              </div>

              <div className="group">
                <span className="font-label text-primary text-[0.7rem] tracking-widest uppercase mb-4 block">Social Protocols</span>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/carl-angelo-supan-b733a5193/' },
                    { label: 'GITHUB', href: 'https://github.com/kupxzu/carlkupxzu-portfolio' },
                    { label: 'FACEBOOK', href: 'https://www.facebook.com/null.arl/' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest font-label text-[0.75rem] text-on-surface tracking-wider transition-all border border-outline-variant/20"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Real Map Component */}
            <div className="relative w-full h-64 overflow-hidden group rounded-xl border border-white/10 shadow-inner z-0">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full z-0 grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customMapIcon}>
                  <Popup>
                    <div className="text-slate-900 font-bold font-mono text-xs">
                      HERE I AM
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>

              {/* Status Overlay Badge */}
              <div className="absolute bottom-4 left-4 z-[1000] font-label text-[0.6rem] text-primary tracking-widest uppercase flex items-center gap-2 bg-[#0e0e0e]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                HERE I AM
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showChickenPenguin, setShowChickenPenguin] = useState(false);

  return (
    <>
      {/* Chicken Penguin Modal */}
      <AnimatePresence>
        {showChickenPenguin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setShowChickenPenguin(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#f5f5f0] p-4 rounded-2xl shadow-2xl max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowChickenPenguin(false)}
                className="absolute -top-3 -right-3 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors z-10"
              >
                <X size={16} />
              </button>

              <img
                src={`${import.meta.env.BASE_URL}chickpeng.jpg`}
                alt="Chicken Penguin Art"
                className="w-full h-auto rounded-lg shadow-inner"
              />

              {/* Caption Section */}
              <div className="mt-4 text-center">
                <p className="text-gray-800 font-medium italic">
                  "The Little Chicken Penguin"
                </p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Inspired by my pet chick who refuses to walk like a bird and insists on waddling like a penguin. So I drew this little adorable creature to honor his unique strut.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-[#0e0e0e] w-full py-16 px-8 border-t border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-white font-headline mb-2">
              KUPXZU THE{' '}
              <span
                onClick={() => setShowChickenPenguin(true)}
                className="cursor-pointer text-purple-500 hover:text-purple-400 transition-colors underline decoration-2 underline-offset-4"
              >
                CHICKEN.PENGUIN
              </span>
              {' '}-.-
            </div>
            <p className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant">© 2026 KUPXZU. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-8 font-label text-[0.75rem] uppercase tracking-widest">
            <a className="text-on-surface-variant hover:text-primary transition-all hover:translate-y-[-2px] duration-200" href="https://x.com/yanagi_ri"><Twitter size={16} /></a>
            <a className="text-on-surface-variant hover:text-primary transition-all hover:translate-y-[-2px] duration-200" href="https://github.com/kupxzu"><Github size={16} /></a>
            <a className="text-on-surface-variant hover:text-primary transition-all hover:translate-y-[-2px] duration-200" href="https://www.linkedin.com/in/carl-angelo-supan-b733a5193"><Linkedin size={16} /></a>
            <a className="text-on-surface-variant hover:text-primary transition-all hover:translate-y-[-2px] duration-200" href="https://www.facebook.com/null.arl/"><Facebook size={16} /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}