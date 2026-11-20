import { site } from "@/config/site";
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#197184" />
        <path d="M8 24 16 7l8 17" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 18.5h9" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="16" cy="7" r="2.6" fill="#FFC83D" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-wide">{site.BRAND_NAME}</span>
    </span>
  );
}
