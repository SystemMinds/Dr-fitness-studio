/**
 * Resolves a file in `public/` against the deploy base path, so the site works
 * both at a domain root (`/`) and in a GitHub Pages project subfolder
 * (`/Dr-fitness-studio/`). Pass paths relative to `public/`, e.g. `images/hero.webp`.
 */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
