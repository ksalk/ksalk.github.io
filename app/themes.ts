export interface ThemeDefinition {
  value: string;
  label: string;
}

// Single source of truth for available themes
export const THEMES: ThemeDefinition[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' }
];

export const DEFAULT_THEME = 'light';

/**
 * Resolve a stored string (possibly legacy) to a valid theme or null.
 */
export function normalizeTheme(raw: string | null): string | null {
  if (!raw) return null;
  return THEMES.some(t => t.value === raw) ? raw : null;
}

/**
 * Generate the inline script used in the <head> to prevent theme flash.
 * Keeps logic in one place so we don't duplicate mappings.
 */
export function generateInlineThemeScript(): string {
  return `(()=>{try{let s=localStorage.getItem('theme');if(!(s==='light'||s==='dark'))s='light';document.documentElement.dataset.theme=s;localStorage.setItem('theme',s);}catch(e){}})();`;
}
