import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Cloud, Files, FolderOpen, Gauge, LockKeyhole, Search, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { icon: Files, title: "One view for every drive", description: "Bring files from your different Google Drive accounts into one clear workspace, without jumping between profiles." },
  { icon: Search, title: "Find files faster", description: "Search across connected accounts and quickly understand which account a file belongs to." },
  { icon: Gauge, title: "Understand your storage", description: "See storage usage account by account, while keeping each Google account's quota distinct." },
  { icon: LockKeyhole, title: "Your files stay yours", description: "Private by default. Account ownership and explicit permissions should decide who can access each resource." },
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <Link className="landing-brand" href="/" aria-label="OmniDrive home">
          <span className="brand-mark"><Cloud size={21} /></span>
          <span>omni<span className="brand-light">drive</span></span>
        </Link>
        <nav className="landing-nav-links" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <Link className="landing-nav-cta" href="/dashboard">Explore preview <ArrowRight size={15} /></Link>
        </nav>
      </header>

      <section className="landing-hero">
        <div className="hero-copy">
          <div className="landing-eyebrow"><Sparkles size={14} /> A simpler way to manage cloud files</div>
          <h1>All your drives.<br /><span>One clear view.</span></h1>
          <p className="landing-lede">OmniDrive is being built to help you manage multiple Google Drive accounts from one organized workspace—so your files are easier to find and your storage is easier to understand.</p>
          <div className="hero-actions">
            <Link className="landing-primary-button" href="/dashboard">Explore the preview <ArrowRight size={17} /></Link>
            <a className="landing-secondary-button" href="#features">See what it does <ArrowDown size={16} /></a>
          </div>
          <p className="hero-note"><LockKeyhole size={14} /> Private-by-default design. Google account connection is not live yet.</p>
        </div>

        <div className="hero-visual" aria-label="Illustration of multiple drives in one workspace">
          <div className="visual-glow" />
          <div className="drive-window">
            <div className="drive-window-top"><div className="window-dots"><i /><i /><i /></div><span>YOUR WORKSPACE</span><span className="preview-tag">PREVIEW</span></div>
            <div className="drive-window-title"><div><small>YOUR ACCOUNTS</small><h2>Everything, together.</h2></div><span className="window-cloud"><Cloud size={23} /></span></div>
            <div className="mini-drive-row"><span className="mini-drive-icon mini-purple"><Cloud size={17} /></span><div><strong>Personal Drive</strong><small>Documents · Photos · Files</small></div><span className="mini-check"><Check size={14} /></span></div>
            <div className="mini-drive-row"><span className="mini-drive-icon mini-blue"><Cloud size={17} /></span><div><strong>Work Drive</strong><small>Projects · Reports · Shared files</small></div><span className="mini-check"><Check size={14} /></span></div>
            <div className="mini-drive-row"><span className="mini-drive-icon mini-orange"><FolderOpen size={17} /></span><div><strong>Other accounts</strong><small>Keep each source identifiable</small></div><span className="mini-more">•••</span></div>
            <div className="visual-bottom-note"><ShieldCheck size={15} /> Separate accounts. One workspace.</div>
          </div>
          <div className="floating-file"><span className="floating-file-icon"><Files size={17} /></span><span><strong>Your files, organized</strong><small>Across your accounts</small></span></div>
        </div>
      </section>

      <section className="landing-trust-strip" id="privacy">
        <div><ShieldCheck size={19} /><span><strong>Privacy first</strong><small>Access should always be permission-based</small></span></div>
        <div><Cloud size={19} /><span><strong>Multiple accounts</strong><small>Designed for personal and work drives</small></span></div>
        <div><FolderOpen size={19} /><span><strong>Clear organization</strong><small>Know which account each file belongs to</small></span></div>
      </section>

      <section className="landing-features" id="features">
        <div className="section-intro"><span className="landing-eyebrow">WHY OMNIDRIVE</span><h2>Less account switching.<br />More clarity.</h2><p>A unified experience for your cloud files, with a clear boundary around every account.</p></div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article className="feature-card" key={title}>
              <span className={`feature-icon feature-icon-${index + 1}`}><Icon size={20} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-bottom-cta">
        <div><span className="landing-eyebrow">OMNIDRIVE · IN DEVELOPMENT</span><h2>Your cloud, a little less complicated.</h2><p>Take a look at the current interface preview while the secure account connection is being built.</p></div>
        <Link className="landing-primary-button" href="/dashboard">View dashboard preview <ArrowRight size={17} /></Link>
      </section>

      <footer className="landing-footer"><Link className="landing-brand" href="/"><span className="brand-mark"><Cloud size={18} /></span><span>omni<span className="brand-light">drive</span></span></Link><span>Designed for clarity. Built with privacy in mind.</span><span>Preview only · No Google accounts connected</span></footer>
    </main>
  );
}
