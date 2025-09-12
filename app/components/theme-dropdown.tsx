"use client";
import { useEffect, useState } from 'react';
import { THEMES, DEFAULT_THEME, normalizeTheme } from '../themes';

function applyTheme(theme: string) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {}
}

export function ThemeDropdown() {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  let stored: string | null = null;
  try { stored = localStorage.getItem('theme'); } catch {}
  const normalized = normalizeTheme(stored) || DEFAULT_THEME;
  setTheme(normalized);
  applyTheme(normalized);
    setMounted(true);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setTheme(val);
    applyTheme(val);
  };

  return (
    <label className="text-sm flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
      <span className="hidden md:inline">Theme</span>
      <select
        aria-label="Select theme"
        value={theme}
        onChange={onChange}
        disabled={!mounted}
        className="bg-transparent border border-neutral-300 dark:border-neutral-600 rounded px-2 py-1 focus:outline-none text-sm"
      >
        {THEMES.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </label>
  );
}

export default ThemeDropdown;
