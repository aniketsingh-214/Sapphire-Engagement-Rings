import { useState } from "react";
import { useStore } from "../context/StoreContext";
import { CloseIcon, UserIcon } from "./icons";

export default function UserPanel({ open, onClose }) {
  const { user, login, logout } = useStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!email.trim()) return;
    login({ name: name.trim() || email.split("@")[0], email: email.trim() });
    setEmail("");
    setName("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-lg bg-cream p-5 shadow-xl sm:p-8">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="mb-5 flex flex-col items-center text-center sm:mb-6">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sand sm:h-14 sm:w-14">
            <UserIcon className="h-6 w-6 text-sapphire sm:h-7 sm:w-7" />
          </div>
          <h2 className="font-serif text-xl sm:text-2xl">{user ? `Hello, ${user.name}` : "Your Account"}</h2>
          <p className="mt-1 text-xs text-ink/50 sm:text-sm">
            {user ? user.email : "Sign in to view your saved rings and orders."}
          </p>
        </div>

        {user ? (
          <div className="space-y-3">
            <div className="rounded-md bg-white p-4 text-sm">
              <p className="text-ink/60">Demo account — no real data is stored.</p>
            </div>
            <button
              onClick={logout}
              className="w-full rounded-full border border-ink py-2.5 text-sm font-medium transition hover:bg-ink hover:text-cream"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (optional)"
              className="w-full rounded-md border border-ink/20 px-4 py-2.5 text-sm focus:border-sapphire focus:outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              type="email"
              placeholder="Email address"
              className="w-full rounded-md border border-ink/20 px-4 py-2.5 text-sm focus:border-sapphire focus:outline-none"
            />
            <button
              onClick={handleLogin}
              className="w-full rounded-full bg-ink py-2.5 text-sm font-medium text-cream transition hover:bg-sapphire"
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
