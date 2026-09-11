/* Academic homepage layout: editorial, evidence-led, and content-first. */
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Network,
  Search,
  X,
} from "lucide-react";
import { type ReactNode, useState } from "react";

const assets = {
  avatar: "/assets/lpj-avatar.webp",
  mark: "/assets/lpj-mark.svg",
};

const githubUrl = "https://github.com/SUSTech-TP?tab=repositories";
const scholarUrl = "https://scholar.google.com/citations?user=PYnqyTMAAAAJ&hl=zh-CN";
const email = "mailto:pengjieliu@sustech.edu.cn";

const navItems = [
  ["About Me", "about"],
  ["News", "news"],
  ["Education", "education"],
  ["Research", "research"],
  ["Services", "services"],
  ["Publications", "publications"],
] as const;

const news = [
  ["2025", "Six first-author papers were selected for the homepage, spanning knowledge graph completion, legal judgment prediction and continual pre-training."],
  ["2025.06", "SEMKR was published in Neurocomputing."],
  ["2025.05", "JurisTeller research materials and reproducible code were organized on GitHub."],
  ["2024.12", "Presented recent work on semantic-aware legal judgment prediction and knowledge graph completion."],
];

const education = [
  ["2021 — now", "Southern University of Science and Technology", "Research in legal artificial intelligence, information retrieval and knowledge graph completion."],
  ["2018 — 2021", "Loughborough University", "Research and postgraduate study in information retrieval and intelligent systems."],
  ["Earlier study", "Northeastern University", "Computer science and information technology foundations."],
];

const projects = [
  ["SEMKR", "Knowledge graph completion", "Joint learning of semantic and topological representations for knowledge graph completion.", "https://github.com/SUSTech-TP/SEMKR"],
  ["JurisTeller", "Legal reasoning system", "A research codebase for legal judgment prediction and legal clue reasoning.", "https://github.com/SUSTech-TP/JurisTeller"],
  ["Research corpus", "Research infrastructure", "A structured workspace for tracking legal AI, multimodal and agent research materials.", "https://github.com/SUSTech-TP?tab=repositories"],
];

const publications = [
  ["ICMLC & ICWAPR · 2024 · Finalist, Lotfi Zadeh Best Paper Awards", "MUSE: Multi-knowledge Passing on the Edges, Boosting Knowledge Graph Completion", "Pengjie Liu"],
  ["IEEE SMC · 2024 · Long paper · CCF-C", "SEMDR: A Semantic-Aware Dual Encoder Model for Legal Judgment Prediction with Legal Clue Tracing", "Pengjie Liu, Wang Zhang, Yulong Ding, Xuefeng Zhang, Shuang-Hua Yang"],
  ["ADMA · 2024 · Long paper · CCF-C", "MUSE: Integrating Multi-Knowledge for Knowledge Graph Completion", "Pengjie Liu"],
  ["DASFAA · 2025 · Long oral presentation · CCF-B", "JurisNexus: Enhancing Legal Judgment Prediction via Cross-Reasoning-Chain Representation Learning Mechanism", "Pengjie Liu, Xiaoqing Zhang, Yulong Ding, Shuang-Hua Yang"],
  ["Neurocomputing · 2025 · JCR Q1 · Impact factor 6.5", "SEMKR: Joint Learning of Semantic and Topological Representations for Knowledge Graph Completion", "Pengjie Liu, Wang Zhang, Yulong Ding, Jie Jiang, Shuang-Hua Yang"],
  ["ICIC · 2025 · Long paper · CCF-C", "ECHO: Enhancing Knowledge Graph Completion via Multi-source Knowledge Representation Learning Mechanism with Continual Pre-training", "Pengjie Liu, Wang Zhang, Yulong Ding, Shuang-Hua Yang"],
  ["arXiv · 2024", "LegalDuet: Learning Effective Representations for Legal Judgment Prediction through a Dual-View Legal Clue Reasoning", "Pengjie Liu, Z. Liu, X. Yi, L. Yang, S. Wang, Y. Gu, G. Yu, X. Xie, S. Yang"],
];

function Link({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={14} /></a>;
}

function Authors({ value }: { value: string }) {
  return <>{value.split(", ").map((author, index) => <span className={index === 0 ? "pub-author-me" : undefined} key={author}>{index > 0 ? ", " : ""}{author}</span>)}</>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="mobile-header">
        <a href="#top" className="brand-mark" onClick={closeMenu}><img src={assets.mark} alt="LPJ" /><span>Pengjie Liu</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </header>

      <aside className={`profile-rail ${menuOpen ? "is-open" : ""}`}>
        <div className="rail-inner">
          <a className="rail-brand" href="#top" onClick={closeMenu}><img src={assets.mark} alt="LPJ" /><span>Academic homepage</span></a>
          <div className="portrait-frame"><img src={assets.avatar} alt="Portrait of Pengjie Liu" /></div>
          <div className="profile-intro"><p className="eyebrow">Pengjie Liu · 刘鹏杰</p><h1>Pengjie Liu</h1><p className="affiliation">Researcher in legal AI, information retrieval and knowledge graphs</p></div>
          <div className="rail-location"><MapPin size={15} /> Shenzhen, China</div>
          <nav className="rail-nav" aria-label="Primary navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</nav>
          <div className="rail-links"><a href={email}><Mail size={15} /> Email</a><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href={scholarUrl} target="_blank" rel="noreferrer"><GraduationCap size={15} /> Google Scholar</a></div>
          <p className="rail-footer">Last updated · 2026</p>
        </div>
      </aside>

      <main className="content-column" id="top">
        <section className="hero-section" id="about">
          <div className="hero-kicker"><span className="status-dot" /> LPJ / research notes · 001</div>
          <div className="hero-grid"><div><h2>Researching <em>transparent</em> intelligent systems for legal reasoning.</h2><p className="hero-lede">I am Pengjie Liu, a researcher working at the intersection of legal artificial intelligence, information retrieval and knowledge graphs. My work studies how structured evidence, retrieval and representation learning can make intelligent systems easier to understand and use.</p><div className="hero-actions"><a className="ink-button" href="#publications">Selected publications <ArrowUpRight size={16} /></a><Link href={scholarUrl}>Google Scholar</Link></div></div><aside className="hero-aside"><div className="aside-line"><span>Research</span><strong>Legal AI<br />Information retrieval<br />Knowledge graphs</strong></div><div className="aside-line"><span>Based in</span><strong>Shenzhen, China<br />Southern University of Science and Technology</strong></div></aside></div>
        </section>

        <section className="section-block news-section" id="news"><div className="section-heading"><span className="section-index">01</span><h3>News</h3></div><div className="news-list">{news.map(([date, item]) => <div className="news-item" key={date}><time>{date}</time><p>{item}</p></div>)}</div></section>

        <section className="section-block" id="education"><div className="section-heading"><span className="section-index">02</span><h3>Education & employment</h3></div><div className="timeline-list">{education.map(([date, title, detail]) => <div className="timeline-item" key={title}><time>{date}</time><div><h4>{title}</h4><p>{detail}</p></div></div>)}</div></section>

        <section className="section-block" id="research"><div className="section-heading"><span className="section-index">03</span><h3>Research</h3></div><div className="research-lead"><p>My research asks how a system can <strong>retrieve the right evidence, represent it clearly and explain the path from question to decision.</strong></p><div className="research-signals"><span>01 / Representation</span><span>02 / Retrieval</span><span>03 / Reasoning</span></div></div><div className="interest-grid"><div className="interest"><Network size={19} /><div><h4>Knowledge graphs</h4><p>Semantic and topological representations for structured completion and evidence linking.</p></div></div><div className="interest"><Search size={19} /><div><h4>Information retrieval</h4><p>Finding the right clue, source or precedent before a model starts to explain.</p></div></div><div className="interest"><BookOpen size={19} /><div><h4>Legal reasoning</h4><p>Representation learning and reasoning chains for legal judgment prediction.</p></div></div></div></section>

        <section className="section-block" id="projects"><div className="section-heading"><span className="section-index">04</span><h3>Selected projects</h3><Link href={githubUrl}>All repositories</Link></div><div className="project-grid">{projects.map(([title, type, description, href], index) => <a className="project-card" href={href} target="_blank" rel="noreferrer" key={title}><div className={`project-image project-image-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div><div className="project-card-body"><p className="project-type">{type}</p><h4>{title}<ArrowUpRight size={15} /></h4><p>{description}</p><span className="project-open">View repository</span></div></a>)}</div></section>

        <section className="section-block" id="services"><div className="section-heading"><span className="section-index">05</span><h3>Academic services</h3></div><div className="service-grid"><div><BriefcaseBusiness size={19} /><h4>Conference service</h4><p>Program Committee Member for ICIC 2025, PRICAI 2025, PRICAI 2026 and ICAI 2025; Workshop Chair for IEEE BDDM 2025.</p></div><div><GraduationCap size={19} /><h4>Memberships</h4><p>CCF Student Member and IEEE Student Member.</p></div><div><BookOpen size={19} /><h4>Peer review</h4><p>Reviewer for CCF-indexed conferences including AAAI, EMNLP, NAACL, COLING, ICASSP, ICME, ICIC, ICANN, IJCNN, IEEE SMC and PRICAI, as well as SCI journals EAAI and Neurocomputing.</p></div></div></section>

        <section className="section-block publications-section" id="publications"><div className="section-heading"><span className="section-index">06</span><h3>Publications</h3><Link href={scholarUrl}>Full list on Scholar</Link></div><p className="publication-note">Selected work · please follow the linked scholarly record for the latest publication status.</p><div className="publication-list">{publications.map(([venue, title, authors], index) => <article className="publication-row" key={title}><div className="publication-number">{String(index + 1).padStart(2, "0")}</div><div className="publication-body"><p className="publication-venue">{venue}</p><h4>{title}</h4><p className="publication-authors"><Authors value={authors} /></p></div><Link href={scholarUrl}>Scholar</Link></article>)}</div></section>

        <section className="section-block contact-section" id="contact"><div className="section-heading"><span className="section-index">07</span><h3>Contact</h3></div><div className="contact-grid"><div><p className="contact-lead">For research collaboration, academic discussion or questions about the projects, please write by email.</p><a className="contact-email" href={email}>pengjieliu@sustech.edu.cn <ArrowUpRight size={16} /></a></div><div className="contact-links"><Link href={githubUrl}>GitHub repositories</Link><Link href={scholarUrl}>Google Scholar profile</Link></div></div></section>

        <footer className="site-footer"><div><span className="footer-mark">LPJ</span><span>Research, code and notes.</span></div><div><a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a><a href={scholarUrl} target="_blank" rel="noreferrer">Scholar</a><a href={email}>Email</a></div></footer>
      </main>
    </div>
  );
}
