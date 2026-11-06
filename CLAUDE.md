# CLAUDE.md

## Ahorro de contexto
- Antes de leer un archivo entero, buscar con grep y leer solo lo necesario.
- Para explorar el proyecto, usar un subagente y traer solo el resumen.
- Mostrar el diff, no el archivo completo.
- Si cambiamos de tarea, proponer /compact o una sesión nueva.

## Proyecto
- Portfolio personal: React 19 + Vite + Tailwind v4 + React Router. Estilo neo-brutalista (mantenerlo).
- Contenido en `src/data/` (`profile.js`, `projects.js`, `ui.js`), bilingüe `{ es, en }`.
- Tokens de color y componentes CSS (`.btn`, `.card`, `.tag`, `.eyebrow`, `.on-accent`) en `src/index.css`; modo oscuro con la clase `.dark`.
- Checks: `npm run lint` y `npm run build`. Si cambian datos del CV: `npm run build && npm run assets`.
