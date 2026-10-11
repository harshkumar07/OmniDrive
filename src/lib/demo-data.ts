export type DriveAccount = {
  id: string;
  email: string;
  label: string;
  initials: string;
  color: "violet" | "blue" | "amber" | "green" | "rose";
  usedBytes: number;
  totalBytes: number;
  status: "connected" | "reauthorization-required";
};

export type DriveFile = {
  id: string;
  name: string;
  kind: "folder" | "document" | "spreadsheet" | "image" | "pdf";
  modified: string;
  sizeLabel: string;
  accountId: string;
};

export const demoAccounts: DriveAccount[] = [
  { id: "demo-account-1", email: "personal@example.com", label: "Personal", initials: "P", color: "violet", usedBytes: 8.2 * 1024 ** 3, totalBytes: 15 * 1024 ** 3, status: "connected" },
  { id: "demo-account-2", email: "work@example.com", label: "Work", initials: "W", color: "blue", usedBytes: 11.4 * 1024 ** 3, totalBytes: 15 * 1024 ** 3, status: "connected" },
  { id: "demo-account-3", email: "archive@example.com", label: "Archive", initials: "A", color: "amber", usedBytes: 4.7 * 1024 ** 3, totalBytes: 15 * 1024 ** 3, status: "connected" },
  { id: "demo-account-4", email: "projects@example.com", label: "Projects", initials: "P", color: "green", usedBytes: 13.8 * 1024 ** 3, totalBytes: 15 * 1024 ** 3, status: "reauthorization-required" },
  { id: "demo-account-5", email: "backup@example.com", label: "Backup", initials: "B", color: "rose", usedBytes: 6.1 * 1024 ** 3, totalBytes: 15 * 1024 ** 3, status: "connected" },
];

export const demoFiles: DriveFile[] = [
  { id: "demo-file-1", name: "Product roadmap", kind: "folder", modified: "Today", sizeLabel: "—", accountId: "demo-account-3" },
  { id: "demo-file-2", name: "Project requirements.pdf", kind: "pdf", modified: "Yesterday", sizeLabel: "2.4 MB", accountId: "demo-account-2" },
  { id: "demo-file-3", name: "Monthly expenses", kind: "spreadsheet", modified: "Oct 8, 2026", sizeLabel: "184 KB", accountId: "demo-account-1" },
  { id: "demo-file-4", name: "Brand exploration", kind: "image", modified: "Oct 7, 2026", sizeLabel: "5.8 MB", accountId: "demo-account-3" },
  { id: "demo-file-5", name: "Meeting notes", kind: "document", modified: "Oct 6, 2026", sizeLabel: "36 KB", accountId: "demo-account-5" },
  { id: "demo-file-6", name: "Architecture draft", kind: "pdf", modified: "Oct 4, 2026", sizeLabel: "920 KB", accountId: "demo-account-2" },
];

export function formatBytes(bytes: number): string {
  if (bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index >= 3 ? 1 : 0)} ${units[index]}`;
}