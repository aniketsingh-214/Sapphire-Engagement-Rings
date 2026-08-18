export function HeartIcon({ filled = false, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "#1e3a8a" : "none"} stroke={filled ? "#1e3a8a" : "currentColor"} strokeWidth="1.7">
      <path d="M12 21C12 21 3.5 15.5 3.5 9.5a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2C20.5 15.5 12 21 12 21z" />
    </svg>
  );
}

export function BagIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 8h12l-1.5 12h-9L6 8z" />
      <path d="M9.5 8V6a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  );
}

export function UserIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 21c0-3.5 3.4-6 7.5-6s7.5 2.5 7.5 6" />
    </svg>
  );
}

export function SearchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MenuIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  );
}
