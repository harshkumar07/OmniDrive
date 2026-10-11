import { AlertCircle, ArrowRight, Cloud, FileText, Folder, HardDrive, LockKeyhole, Plus, Search, ShieldCheck, Upload } from "lucide-react";
import { demoAccounts, demoFiles, formatBytes, type DriveAccount, type DriveFile } from "@/lib/demo-data";

const colors: Record<DriveAccount["color"], string> = {
  violet: "account-violet", blue: "account-blue", amber: "account-amber", green: "account-green", rose: "account-rose",
};
const accountById = new Map(demoAccounts.map((account) => [account.id, account]));
const totalUsed = demoAccounts.reduce((sum, item) => sum + item.usedBytes, 0);
const totalCapacity = demoAccounts.reduce((sum, item) => sum + item.totalBytes, 0);

function Avatar({ account }: { account: DriveAccount }) {
  return <span className={`account-avatar ${colors[account.color]}`}>{account.initials}</span>;
}
function FileMark({ kind }: { kind: DriveFile["kind"] }) {
  if (kind === "folder") return <Folder size={18} className="file-folder" />;
  return <FileText size={18} className={kind === "pdf" ? "file-pdf" : "file-doc"} />;
}
export default function HomePage() {
  return <main className="app-shell">
    <aside className="sidebar">
      <a className="brand" href="#"><span className="brand-mark"><Cloud size={21}/></span><span>omni<span className="brand-light">drive</span></span></a>
      <div className="workspace-label">WORKSPACE</div>
      <nav><a className="nav-item active" href="#"><HardDrive size={17}/> Overview</a><a className="nav-item" href="#files"><Folder size={17}/> All files <span className="nav-count">{demoFiles.length}</span></a><a className="nav-item" href="#accounts"><Cloud size={17}/> Connected drives <span className="nav-count">{demoAccounts.length}</span></a></nav>
      <div className="sidebar-section-head">CONNECTED ACCOUNTS</div>
      <div className="sidebar-accounts">{demoAccounts.map((account) => <a className="sidebar-account" href="#accounts" key={account.id}><Avatar account={account}/><span>{account.label}</span><i className={account.status === "connected" ? "online-dot" : "warning-dot"}/></a>)}</div>
      <div className="privacy-card"><ShieldCheck size={18}/><div><strong>Private by design</strong><p>Only you can access your connected drives. Sharing is off by default.</p></div></div>
    </aside>
    <section className="main-panel">
      <header className="topbar"><div>Workspace <span> / </span> <strong>Overview</strong></div><span className="demo-pill">● &nbsp; Demo data</span></header>
      <div className="page-content">
        <div className="welcome-row"><div><div className="eyebrow">YOUR CLOUD, IN ONE PLACE</div><h1>Your drives, together<span>.</span></h1><p className="page-subtitle">A clearer view of storage across your connected accounts.</p></div><button className="button" title="Google connection will be implemented in a later phase"><Plus size={16}/> Connect a drive</button></div>
        <div className="notice-banner"><AlertCircle size={19}/><div><strong>Preview mode — no Google accounts are connected</strong><p>All accounts and files below are fictional demo data. Authentication and Drive access are not implemented yet.</p></div></div>
        <section className="stats-grid">
          <article className="stat-card"><div className="stat-top">Total reported capacity <HardDrive size={17}/></div><div className="stat-value">{formatBytes(totalCapacity)}</div><div className="stat-foot">Across {demoAccounts.length} demo accounts</div></article>
          <article className="stat-card"><div className="stat-top">Reported space used <Cloud size={17}/></div><div className="stat-value">{formatBytes(totalUsed)}</div><div className="stat-foot">{Math.round(totalUsed / totalCapacity * 100)}% of demo capacity</div></article>
          <article className="stat-card"><div className="stat-top">Connected accounts <ShieldCheck size={17}/></div><div className="stat-value">{demoAccounts.filter(a => a.status === "connected").length}<small> / {demoAccounts.length}</small></div><div className="stat-foot">Mock connection states only</div></article>
        </section>
        <section className="content-grid">
          <article className="panel" id="accounts"><div className="panel-heading"><div><h2>Storage by account</h2><p>Each Google account keeps its own quota.</p></div></div><div className="account-list">
            {demoAccounts.map((account) => { const percent = Math.min(100, account.usedBytes / account.totalBytes * 100); return <div className="storage-account-row" key={account.id}><Avatar account={account}/><div className="storage-account-main"><div className="storage-account-title"><strong>{account.label}</strong><span className={account.status === "connected" ? "status" : "status status-warning"}>{account.status === "connected" ? "Demo connected" : "Needs attention"}</span></div><span className="account-email">{account.email}</span><div className="storage-bar"><span className={colors[account.color]} style={{width: percent + "%"}}/></div></div><div className="storage-numbers"><strong>{formatBytes(account.usedBytes)}</strong><span>of {formatBytes(account.totalBytes)}</span><small>{Math.round(percent)}% used</small></div></div>; })}
          </div><div className="storage-footnote"><LockKeyhole size={14}/> Combined numbers are informational, not a merged Google quota.</div></article>
          <article className="panel"><div className="panel-heading"><h2>Quick actions</h2><p>Shortcuts for your workspace.</p></div><button className="quick-action" title="Not implemented yet"><Search size={18}/><span><strong>Search all drives</strong><small>Find files across accounts</small></span><ArrowRight size={15}/></button><button className="quick-action" title="Not implemented yet"><Upload size={18}/><span><strong>Upload a file</strong><small>Choose a destination account</small></span><ArrowRight size={15}/></button><div className="tip-card">Every file stays tied to its source account, so access checks can be enforced correctly.</div></article>
        </section>
        <section className="panel" id="files"><div className="panel-heading"><div><h2>Recent files</h2><p>A sample of files from connected drives.</p></div><span className="search-hint"><Search size={14}/> Search coming later</span></div><div className="table-scroll"><table className="files-table"><thead><tr><th>Name</th><th>Source account</th><th>Last modified</th><th>Size</th></tr></thead><tbody>{demoFiles.map((file) => { const account = accountById.get(file.accountId); if (!account) return null; return <tr key={file.id}><td><div className="file-name-cell"><FileMark kind={file.kind}/>{file.name}</div></td><td><div className="file-account-cell"><Avatar account={account}/>{account.label}</div></td><td className="muted-cell">{file.modified}</td><td className="muted-cell">{file.sizeLabel}</td></tr>; })}</tbody></table></div></section>
        <footer className="page-footer"><span><LockKeyhole size={14}/> Privacy-first by default</span><span>OmniDrive preview · No Google account access</span></footer>
      </div>
    </section>
  </main>;
}