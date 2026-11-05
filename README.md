# Gonzalo Gamenara — Portfolio

Portfolio personal (ES/EN, modo claro/oscuro) hecho con **React 19, Vite, Tailwind CSS v4 y React Router**.
Live: https://portafolio-blond-six.vercel.app

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint     # ESLint
npm run build    # build de producción en dist/
npm run assets   # regenera CV en PDF (ES/EN), og-image y apple-touch-icon (requiere build previo + Playwright)
```

## Dónde editar el contenido

Todo el contenido vive en `src/data/` y el sitio, el CV online (`/cv`) y los PDFs salen de ahí:

| Archivo | Qué contiene |
| --- | --- |
| `src/data/profile.js` | Datos personales, resumen, experiencia, educación, certificaciones, skills |
| `src/data/projects.js` | Proyectos (destacados, filtros, links, capturas) y proyectos de archivo |
| `src/data/ui.js` | Textos de la interfaz en español e inglés |

Después de cambiar datos que aparecen en el CV, corré `npm run build && npm run assets` para regenerar los PDFs.

Capturas de proyectos: `public/projects/*.webp` (960px de ancho). Videos: `public/videos/*.mp4` (H.264, sin audio).

## Formulario de contacto

Por defecto abre el cliente de correo del visitante con el mensaje armado. Para recibir los mensajes
directamente, creá un formulario en [Formspree](https://formspree.io) (o similar que acepte JSON) y
definí `VITE_CONTACT_ENDPOINT` en las variables de entorno de Vercel (ver `.env.example`).

## Deploy

Vercel. `vercel.json` incluye el rewrite para SPA (las rutas como `/projects` funcionan al recargar),
cache largo para `/assets` y headers de seguridad básicos. Si cambiás de dominio, actualizá `SITE_URL`
en `src/data/profile.js`, `index.html`, `public/robots.txt`, `public/sitemap.xml` y corré `npm run assets`.
