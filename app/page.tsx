'use client';

import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, Moon, Search, Send, Sparkles, Sun, Terminal as TerminalIcon, X } from 'lucide-react';

type WindowKind = 'about' | 'resume' | 'terminal' | null;
type Project = { id: 'intervo' | 'airmeet'; number: string; category: string; title: string; description: string; features: string[]; stack: string[]; github: string; live: string; tone: string };

const PROFILE = {
  name: 'Dhruvi Upadhyay',
  role: 'B.Tech IT Student · Aspiring Software Developer',
  headline: 'I build thoughtful digital experiences.',
  intro: 'I enjoy turning ideas into useful, intuitive web experiences — from clean interfaces to the logic that makes them work.',
  email: 'dhruvi.pcs@gmail.com',
  github: 'https://github.com/udhruvi007',
  linkedin: 'https://www.linkedin.com/in/dhruvi-upadhyay-ba9b92310/',
  resume: '/resume.pdf',
};

const projects: Project[] = [
  {
    id: 'intervo', number: '01', category: 'CODING INTERVIEW PLATFORM', title: 'Intervo',
    description: 'An online platform designed to make technical interview preparation and collaborative interview sessions more accessible. It brings interview practice, real-time communication and coding workflows together in one place.',
    features: ['Real-time interview sessions with video and chat', 'Screen sharing and collaborative coding workflows', 'Practice problems and interview preparation', 'AI-assisted question generation for interviewers', 'Interview dashboard and session management'],
    stack: ['MERN Stack', 'Clerk', 'Inngest', 'Stream API'],
    github: 'https://github.com/ShivamXroy/Intervo', live: 'https://intervoai.netlify.app/', tone: 'sage'
  },
  {
    id: 'airmeet', number: '02', category: 'VIDEO CONFERENCING PLATFORM', title: 'AirMeet',
    description: 'A real-time video conferencing application for hosting interactive online meetings, with communication and collaboration features designed to make remote sessions more engaging.',
    features: ['Real-time audio and video meetings', 'Screen sharing', 'Waiting room and participant admission', 'In-meeting chat and reactions', 'Raise-hand functionality and polls'],
    stack: ['MERN Stack', 'WebRTC', 'Socket.IO', 'Material UI', 'JavaScript'],
    github: 'https://github.com/ShivamXroy/Airmeet', live: 'https://airmeet-videoconferencing.netlify.app/', tone: 'blush'
  },
];

const skills = [
  { title: 'Web development', note: 'Building responsive web applications', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js'] },
  { title: 'Real-time & APIs', note: 'Application communication', items: ['REST APIs', 'WebRTC', 'Socket.IO', 'Clerk', 'Stream API'] },
  { title: 'Databases', note: 'Working with application data', items: ['MongoDB', 'SQL', 'MySQL'] },
  { title: 'Programming & CS', note: 'Problem solving & fundamentals', items: ['C++', 'JavaScript ES6+', 'DSA', 'OOP', 'OS', 'Computer Networks'] },
  { title: 'Tools & workflow', note: 'Building and collaborating', items: ['Git', 'GitHub', 'Figma', 'Inngest'] },
];

function Flower({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 44 44" aria-hidden="true"><g fill="currentColor"><ellipse cx="22" cy="9" rx="4.5" ry="8"/><ellipse cx="22" cy="35" rx="4.5" ry="8"/><ellipse cx="9" cy="22" rx="8" ry="4.5"/><ellipse cx="35" cy="22" rx="8" ry="4.5"/><ellipse cx="12.8" cy="12.8" rx="4.5" ry="8" transform="rotate(-45 12.8 12.8)"/><ellipse cx="31.2" cy="31.2" rx="4.5" ry="8" transform="rotate(-45 31.2 31.2)"/><ellipse cx="31.2" cy="12.8" rx="4.5" ry="8" transform="rotate(45 31.2 12.8)"/><ellipse cx="12.8" cy="31.2" rx="4.5" ry="8" transform="rotate(45 12.8 31.2)"/></g><circle cx="22" cy="22" r="5" fill="#d9a9a1"/></svg>;
}

function BunnyCursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 650, damping: 38, mass: .22 });
  const springY = useSpring(y, { stiffness: 650, damping: 38, mass: .22 });
  const [mode, setMode] = useState<'idle' | 'hover' | 'click' | 'drag'>('idle');
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX - 13); y.set(e.clientY - 12); setVisible(true); const el = e.target as HTMLElement | null; setMode(el?.closest('[data-cursor="drag"]') ? 'drag' : el?.closest('a,button,[role="button"],input,textarea,select') ? 'hover' : 'idle'); };
    const down = () => setMode('click');
    const up = () => setMode('idle');
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move); window.addEventListener('mousedown', down); window.addEventListener('mouseup', up); document.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', down); window.removeEventListener('mouseup', up); document.removeEventListener('mouseleave', leave); };
  }, [x, y]);
  return <motion.div className={`bunny-cursor bunny-${mode}`} style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }} aria-hidden="true">
    <svg viewBox="0 0 70 82" className="bunny-cursor-svg">
      <g className="bunny-rabbit-body">
        <ellipse cx="36" cy="61" rx="16" ry="13" className="bunny-body-fill"/>
        <ellipse cx="25" cy="70" rx="8" ry="4.5" className="bunny-paw"/>
        <ellipse cx="45" cy="70" rx="8" ry="4.5" className="bunny-paw"/>
        <circle cx="52" cy="56" r="5.5" className="bunny-tail"/>
        <path d="M27 57 Q18 61 20 68" className="bunny-leg"/><path d="M43 57 Q52 61 50 68" className="bunny-leg"/>
      </g>
      <ellipse className="bunny-ear bunny-ear-left" cx="22" cy="17" rx="6.2" ry="14" transform="rotate(-13 22 17)"/><ellipse className="bunny-ear bunny-ear-right" cx="42" cy="16" rx="6.2" ry="14" transform="rotate(13 42 16)"/>
      <ellipse className="bunny-ear-inner" cx="22" cy="17" rx="2.2" ry="9" transform="rotate(-13 22 17)"/><ellipse className="bunny-ear-inner" cx="42" cy="16" rx="2.2" ry="9" transform="rotate(13 42 16)"/>
      <ellipse cx="32" cy="42" rx="19" ry="17" className="bunny-face"/><circle cx="25" cy="41" r="1.8" className="bunny-eye"/><circle cx="39" cy="41" r="1.8" className="bunny-eye"/><path d="M30 46 Q32 49 34 46" className="bunny-mouth"/><ellipse cx="20" cy="47" rx="3.2" ry="1.8" className="bunny-cheek"/><ellipse cx="44" cy="47" rx="3.2" ry="1.8" className="bunny-cheek"/><path d="M32 44 l-2 2 h4z" className="bunny-nose"/>
    </svg>
    <span className="cursor-spark">✳</span>
  </motion.div>;
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => { const timer = window.setTimeout(onDone, 850); return () => window.clearTimeout(timer); }, [onDone]);
  return <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}><div className="loader-inner"><div className="loader-flower"><Flower /></div><p>growing something lovely...</p><div className="loader-track"><motion.span initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: .75 }} /></div></div></motion.div>;
}

function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to dhruvi.dev ✳', 'Type help to explore the portfolio.']);
  const run = (e: FormEvent) => { e.preventDefault(); const c = command.trim().toLowerCase(); if (!c) return; const replies: Record<string, string> = { help: 'Commands: about, projects, skills, experience, education, contact, clear', about: 'I am Dhruvi — a B.Tech Information Technology student and aspiring software developer.', projects: 'Featured projects: Intervo and AirMeet.', skills: 'Frontend: HTML, CSS, JavaScript, React, Next.js | Backend: Node.js, Express | Data: MongoDB, SQL | C/C++', experience: 'Web Developer Intern @ Engineers India Limited, 15 June – 31 July 2026.', education: 'B.Tech in Information Technology, Bhagwan Parshuram Institute of Technology.', contact: `Reach me at ${PROFILE.email} (update the email in the portfolio config before publishing).` }; setHistory(old => c === 'clear' ? [] : [...old, `visitor@dhruvi:~$ ${command}`, replies[c] || `Command not found: ${c}. Type help.`]); setCommand(''); };
  return <div className="terminal"><div className="terminal-output">{history.map((line, i) => <p key={`${line}-${i}`}>{line}</p>)}</div><form onSubmit={run}><span>visitor@dhruvi:~$</span><input value={command} onChange={e => setCommand(e.target.value)} placeholder="type a command..." aria-label="Terminal command" autoFocus /></form></div>;
}

function ProjectWindow({ project, onClose }: { project: Project; onClose: () => void }) {
  return <motion.div className="window-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><motion.div className="desktop-window" drag dragMomentum={false} dragElastic={0.08} initial={{ y: 24, scale: .97, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 16, scale: .98, opacity: 0 }} transition={{ type: 'spring', damping: 24, stiffness: 260 }}><div className="window-bar"><div className="window-dots"><button onClick={onClose} aria-label="Close window"/><i/><i/></div><span>{project.title} / project overview</span><button className="window-close" onClick={onClose} aria-label="Close"><X size={16}/></button></div><div className="window-content"><span className="window-kicker">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><h4>Key features</h4><ul className="project-feature-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><h4>Technology stack</h4><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="window-actions"><a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">Source code <Github size={15}/></a><a className="button button-quiet" href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a></div></div></motion.div></motion.div>;
}

function InfoWindow({ kind, onClose }: { kind: 'about' | 'resume' | 'terminal'; onClose: () => void }) {
  const title = kind === 'terminal' ? 'dhruvi@portfolio — terminal' : kind === 'resume' ? 'Resume / Dhruvi Upadhyay' : 'A little about me';
  return <motion.div className="window-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><motion.div className="desktop-window" drag dragMomentum={false} dragElastic={0.08} initial={{ y: 24, scale: .97, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 16, scale: .98, opacity: 0 }}><div className="window-bar"><div className="window-dots"><button onClick={onClose} aria-label="Close window"/><i/><i/></div><span>{title}</span><button className="window-close" onClick={onClose} aria-label="Close"><X size={16}/></button></div><div className="window-content">{kind === 'terminal' ? <Terminal /> : kind === 'resume' ? <><h3>My resume, in one place.</h3><p>Take a look at my latest resume or save a copy for later.</p><div className="resume-actions"><a className="button button-primary" href={PROFILE.resume} target="_blank" rel="noreferrer">View resume <ExternalLink size={15}/></a><a className="button button-quiet" href={PROFILE.resume} download="Dhruvi_Upadhyay_Resume.pdf">Download PDF <Download size={15}/></a></div><iframe className="resume-preview" src={PROFILE.resume} title="Dhruvi Upadhyay resume" /></> : <><h3>Curious by nature. A builder by choice.</h3><p>I&apos;m Dhruvi, a B.Tech Information Technology student who enjoys understanding how products work and turning ideas into practical web experiences.</p><p>I&apos;ve explored frontend development, backend workflows and collaborative projects, and I&apos;m continuing to strengthen my software development fundamentals.</p><div className="window-note">Currently focused on JavaScript, React, Next.js, full-stack development and problem solving.</div></>}</div></motion.div></motion.div>;
}

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) { return <button className="theme-toggle" onClick={onToggle} aria-label="Toggle colour theme">{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>; }

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeWindow, setActiveWindow] = useState<WindowKind>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [easter, setEaster] = useState(false);
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [query, setQuery] = useState('');
  const [commandOpen, setCommandOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const heroParallax = useTransform(scrollYProgress, [0, .28], [0, 72]);
  const commands = useMemo(() => [{ label: 'About me', target: '#about' }, { label: 'Featured projects', target: '#work' }, { label: 'Skills & technologies', target: '#skills' }, { label: 'Experience', target: '#experience' }, { label: 'Education', target: '#education' }, { label: 'Certifications', target: '#certifications' }, { label: 'Achievements', target: '#achievements' }, { label: 'Contact', target: '#contact' }].filter(c => c.label.toLowerCase().includes(query.toLowerCase())), [query]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setCommandOpen(v => !v); } if (e.key === 'Escape') { setActiveWindow(null); setActiveProject(null); setEaster(false); setCommandOpen(false); } };
    window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key);
  }, []);
  const copyEmail = async () => { try { await navigator.clipboard.writeText(PROFILE.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${PROFILE.email}`; } };
  const submitContact = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${contactName}`); const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`); window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`; };
  const nav = [{ label: 'About', href: '#about' }, { label: 'Projects', href: '#work' }, { label: 'Experience', href: '#experience' }, { label: 'Certifications', href: '#certifications' }, { label: 'Contact', href: '#contact' }];
  const openWindow = (kind: WindowKind) => { setActiveWindow(kind); setActiveProject(null); };

  return <main className={dark ? 'portfolio dark-mode' : 'portfolio'}>
    <motion.div className="scroll-progress" style={{ width: progress }} />
    <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
    <BunnyCursor />
    <header className="site-header"><a href="#home" className="wordmark">dhruvi<span>.</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(n => <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>)}</nav><div className="header-right"><span className="availability"><i/> OPEN TO INTERNSHIPS & SDE ROLES</span><ThemeToggle dark={dark} onToggle={() => setDark(v => !v)}/><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button></div></header>

    <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-star">✳</span> HELLO, I'M DHRUVI <span className="eyebrow-line"/></div><h1>Building for the web,<br/><em>with curiosity & care.</em></h1><p className="hero-role">B.Tech Information Technology Student <span>·</span> Aspiring Software Developer</p><p className="hero-description">I turn ideas into thoughtful digital experiences, combining clean interfaces, practical problem-solving and a willingness to keep learning.</p><div className="hero-actions"><a className="button button-primary" href="#work">View featured projects <ArrowUpRight size={16}/></a><button className="button button-quiet" onClick={() => openWindow('resume')}>View resume <ExternalLink size={15}/></button><a className="button button-quiet" href={PROFILE.resume} download="Dhruvi_Upadhyay_Resume.pdf">Download resume <Download size={15}/></a></div><div className="hero-meta"><span><i/> OPEN TO INTERNSHIPS & ENTRY-LEVEL OPPORTUNITIES</span><span>BASED IN INDIA</span></div></div><motion.div className="hero-art" style={{ y: heroParallax }} aria-label="Abstract botanical illustration"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-sun"/><div className="hero-arch"/><div className="hero-sticker sticker-top">ideas grow<br/><em>when you build</em> <span>✳</span></div><div className="hero-flower flower-large"><Flower/></div><div className="hero-flower flower-small"><Flower/></div><div className="hero-sticker sticker-bottom"><span className="tiny-dot"/> currently creating my next thing</div><span className="floating-star star-one">✳</span><span className="floating-star star-two">✦</span><span className="floating-star star-three">·</span></motion.div><a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a></section>

    <section className="intro-strip"><span>DEVELOPER IN PROGRESS</span><span className="strip-flower">✳</span><span>DETAIL-ORIENTED BY NATURE</span><span className="strip-flower">✳</span><span>ALWAYS LEARNING</span></section>

    <section className="content-section section-wrap about-section" id="about"><div className="section-heading"><span className="section-index">01 / ABOUT ME</span><span className="section-aside">THE PERSON BEHIND THE PROJECTS</span></div><div className="about-grid"><div><h2>Curious mind.<br/><em>Builder's heart.</em></h2></div><div className="about-copy"><p>I&apos;m Dhruvi, a B.Tech Information Technology student at Bhagwan Parshuram Institute of Technology. I enjoy figuring out how technology works and using it to build useful, accessible and thoughtful digital experiences.</p><p>Working on collaborative projects and completing a web development internship has helped me explore both frontend and backend development. I&apos;m now focused on growing into a well-rounded software developer.</p><button className="text-link" onClick={() => openWindow('about')}>A little more about me <ArrowUpRight size={16}/></button></div></div><div className="about-bottom"><span>01 — LEARN</span><span>02 — BUILD</span><span>03 — ITERATE</span><Flower className="about-flower"/></div></section>

    <section className="content-section skills-section" id="skills"><div className="section-wrap"><div className="section-heading"><span className="section-index">02 / SKILLS & TECH STACK</span><span className="section-aside">TOOLS I USE TO BUILD</span></div><div className="skills-title-row"><h2>A growing collection<br/><em>of useful things.</em></h2><p>Grouped by how I use them. I focus on fundamentals and practical experience rather than arbitrary skill percentages.</p></div><div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span>0{i + 1}</span><span className="skill-icon">{['✳', '⌘', '◌', '{ }', '✧'][i]}</span></div><h3>{group.title}</h3><p className="skill-note">{group.note}</p><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><p className="coursework-note"><b>Relevant coursework:</b> Data Structures & Algorithms · OOP · DBMS · Operating Systems · Computer Networks</p></div></section>

    <section className="content-section section-wrap work-section" id="work"><div className="section-heading"><span className="section-index">03 / FEATURED PROJECTS</span><span className="section-aside">A FEW THINGS I'VE WORKED ON</span></div><div className="work-heading"><h2>Made with curiosity<span className="period">.</span></h2><p>Explore two web applications, their features and the technologies behind them.</p></div><div className="project-list project-list-text-only">{projects.map(project => <article className={`project-card project-${project.tone} project-card-text-only`} key={project.id}><div className="project-info"><div className="project-number">{project.number} / {project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-feature-block"><b>KEY FEATURES</b><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><button className="project-open" onClick={() => setActiveProject(project)}>Explore project <ArrowUpRight size={16}/></button><a href={project.github} target="_blank" rel="noreferrer" className="repo-link">GitHub <Github size={14}/></a><a href={project.live} target="_blank" rel="noreferrer" className="repo-link">Live demo <ExternalLink size={14}/></a></div></div></article>)}</div></section>

    <section className="content-section experience-section" id="experience"><div className="section-wrap"><div className="section-heading"><span className="section-index">04 / EXPERIENCE</span><span className="section-aside">LEARNING BY DOING</span></div><div className="experience-layout"><div><h2>Learning beyond<br/><em>the classroom.</em></h2><p className="experience-lead">A first-hand look at collaborative web development and building for a real-world use case.</p></div><article className="experience-card"><div className="experience-card-top"><span className="experience-symbol"><BriefcaseBusiness size={21}/></span><span className="experience-date">JUN — JUL 2026</span></div><div className="experience-company">ENGINEERS INDIA LIMITED · EIL</div><h3>Web Developer Intern</h3><p className="experience-duration">15 June – 31 July 2026 · 6 weeks</p><ul><li>Contributed to the Ex-Employee Portal as part of a web development internship.</li><li>Implemented backend functionality and REST APIs using Node.js, integrating MongoDB for application data management.</li><li>Collaborated with the development team to integrate features, troubleshoot issues and debug application functionality using Git and GitHub.</li></ul><div className="tag-row"><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>REST APIs</span></div><a className="text-link" href="https://github.com/udhruvi007/EIL-Ex-Employee" target="_blank" rel="noreferrer">View project repository <ArrowUpRight size={16}/></a></article></div></div></section>

    <section className="content-section section-wrap education-section" id="education"><div className="section-heading"><span className="section-index">05 / EDUCATION</span><span className="section-aside">THE FOUNDATIONS</span></div><div className="education-grid"><div><span className="education-icon"><GraduationCap size={22}/></span><div className="education-date">BACHELOR'S DEGREE</div><h2>B.Tech in<br/><em>Information Technology.</em></h2></div><div className="education-detail"><h3>Bhagwan Parshuram Institute of Technology (BPIT)</h3><p>Delhi, India</p><div className="education-facts"><span>Program <b>Bachelor of Technology</b></span><span>Branch <b>Information Technology</b></span><span>Duration <b>2023 – 2027</b></span><span>CGPA <b>8.10/10</b></span></div></div></div></section>

    <section className="content-section section-wrap certification-section" id="certifications"><div className="section-heading"><span className="section-index">06 / CERTIFICATIONS</span><span className="section-aside">LEARNING WITH INTENTION</span></div><div className="certification-card"><div className="certificate-mark"><GraduationCap size={25}/></div><div className="certificate-copy"><span className="certificate-issuer">UDEMY · COLT STEELE</span><h2>The Web Developer Bootcamp 2026</h2><p>Completed a 74-hour web development bootcamp covering practical web development concepts and technologies.</p><div className="certificate-meta"><span>COMPLETED 10 NOV 2026</span><span>74 HOURS</span></div><div className="certificate-actions"><a className="text-link" href="https://ude.my/UC-813db1b4-19a7-43b1-a8fb-0db20bb9a8b9" target="_blank" rel="noreferrer">Verify certificate <ArrowUpRight size={15}/></a><a className="text-link" href="/web-developer-bootcamp-certificate.pdf" target="_blank" rel="noreferrer">View certificate PDF <ExternalLink size={15}/></a></div></div></div></section>

    <section className="content-section achievements-section" id="achievements"><div className="section-wrap"><div className="section-heading"><span className="section-index">07 / ACHIEVEMENTS & EXTRAS</span><span className="section-aside">SHOWING UP, TRYING THINGS</span></div><div className="achievement-grid"><div><h2>More than<br/><em>just code.</em></h2><p className="achievement-intro">I value opportunities that push me to collaborate, solve unfamiliar problems and keep learning.</p></div><div className="achievement-list"><article><span className="achievement-mark"><Code2 size={18}/></span><div><h3>400+ DSA Problems Solved</h3><p>Solved 400+ Data Structures and Algorithms problems, strengthening problem-solving and coding fundamentals.</p></div></article><article><span className="achievement-mark"><Sparkles size={18}/></span><div><h3>Smart India Hackathon</h3><p>Participated in SIH editions in 2024 and 2025, gaining experience in team-based problem-solving and rapid solution development.</p></div></article><article><span className="achievement-mark"><GraduationCap size={18}/></span><div><h3>Continuous learning</h3><p>Focused on DSA, JavaScript, React, core computer science subjects and software engineering interview preparation.</p></div></article></div></div></div></section>

    <section className="content-section focus-section"><div className="section-wrap focus-inner"><div className="section-heading"><span className="section-index">08 / CURRENTLY</span><span className="section-aside">WHAT I'M EXPLORING NOW</span></div><div className="focus-row"><h2>Always a work<br/><em>in progress.</em></h2><div className="focus-content"><p>I'm currently improving my full-stack development skills, strengthening DSA and core computer science fundamentals, and looking for opportunities where I can contribute, learn from a team and grow as a software developer.</p><div className="focus-pills"><span>JavaScript & React</span><span>Next.js</span><span>DSA</span><span>Software Engineering</span></div><span className="availability-large"><i/> OPEN TO INTERNSHIPS & FRESHER ROLES</span></div></div></div></section>

    <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-heading"><span className="section-index">09 / CONTACT</span><span className="section-aside">LET'S MAKE SOMETHING GOOD</span></div><div className="contact-main"><div><span className="contact-kicker">HAVE A ROLE, IDEA OR QUESTION?</span><h2>Let's build<br/><em>something useful.</em></h2><p>I'm open to conversations about internships, entry-level software roles, collaborations and interesting projects.</p><a className="button button-dark" href={`mailto:${PROFILE.email}`}>Email me <Mail size={16}/></a><button className="copy-email" onClick={copyEmail}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? 'Copied email' : 'Copy email address'} <span>{PROFILE.email}</span></button></div><div className="contact-art"><div className="contact-circle"/><div className="contact-flower flower-contact"><Flower/></div><div className="contact-card"><Mail size={25}/><span>OPEN TO GOOD<br/>CONVERSATIONS</span></div><span className="contact-note">say hello ✳</span></div></div><div className="contact-form-wrap"><div><h3>Send a little note</h3><p>Fill this in and your email app will open with the message ready to send.</p></div><form className="contact-form" onSubmit={submitContact}><label>Your name<input required value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Your name"/></label><label>Your email<input required type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} placeholder="you@example.com"/></label><label className="message-field">Message<textarea required rows={3} value={contactMessage} onChange={e => setContactMessage(e.target.value)} placeholder="Tell me what you have in mind..."/></label><button className="button button-dark" type="submit">Prepare email <Send size={15}/></button></form></div><footer className="site-footer"><a className="wordmark" href="#home">dhruvi<span>.</span></a><span>THOUGHTFULLY BUILT · ALWAYS LEARNING</span><div className="social-links"><a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18}/></a><button onClick={() => openWindow('terminal')} aria-label="Open secret terminal"><TerminalIcon size={18}/></button></div><button className="footer-star" onClick={() => setEaster(true)} aria-label="Secret surprise">✳</button></footer></div></section>

    <button className="terminal-fab" onClick={() => openWindow('terminal')} aria-label="Open developer terminal"><TerminalIcon size={17}/><span>developer terminal</span><kbd>⌘ K</kbd></button>
    <AnimatePresence>{activeProject && <ProjectWindow project={activeProject} onClose={() => setActiveProject(null)}/>}</AnimatePresence>
    <AnimatePresence>{activeWindow && <InfoWindow kind={activeWindow} onClose={() => setActiveWindow(null)}/>}</AnimatePresence>
    <AnimatePresence>{commandOpen && <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => { if (e.target === e.currentTarget) setCommandOpen(false); }}><motion.div className="command-palette" initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}><div className="command-search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Where would you like to go?" autoFocus/><kbd>ESC</kbd></div>{commands.map(item => <a href={item.target} key={item.target} onClick={() => setCommandOpen(false)}>{item.label}<ArrowUpRight size={14}/></a>)}{commands.length === 0 && <p className="no-results">No matching section found.</p>}</motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{easter && <motion.div className="easter-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setEaster(false)}><motion.div className="easter-card" initial={{ scale: .92, y: 18 }} animate={{ scale: 1, y: 0 }} onClick={e => e.stopPropagation()}><button className="easter-close" onClick={() => setEaster(false)}><X/></button><Flower className="easter-flower"/><h3>You found a little secret!</h3><p>Thanks for taking the time to explore my work. Stay curious, and keep making things. ♡</p><button className="text-link" onClick={() => setEaster(false)}>Back to exploring <ArrowUpRight size={15}/></button></motion.div></motion.div>}</AnimatePresence>
  </main>;
}
