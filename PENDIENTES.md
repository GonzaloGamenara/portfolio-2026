# Pendientes / ideas para próximas sesiones

## ⚠️ Privacidad
- [ ] MIGRA en vivo (migra-nine.vercel.app) muestra datos de salud reales (comidas, sueño, topiramato) a cualquiera, sin login. Agregar login o un modo demo con datos ficticios antes de mostrarla en el portfolio.
- [ ] Cuando haya modo demo: nueva captura de MIGRA (miniatura + página completa para el efecto de scroll) y actualizar la descripción con las funciones nuevas.

## Contenido (lo que más suma para conseguir laburo)
- [ ] Deheza (Shell): agregar 1–2 logros concretos con números (qué sistema, qué se automatizó, impacto).
- [ ] Revisar fechas y bullets de experiencia (inicio en Deheza = jul 2026, ¿correcto?).
- [ ] Decidir si se suman repos públicos de GitHub a los proyectos (hoy solo Stellar Sights tiene link al código).
- [ ] Capturas nuevas de los proyectos si cambiaron (`public/projects/*.webp`).

## Funcionalidad
- [ ] Conectar el formulario de contacto a Formspree (o similar): crear el form y definir `VITE_CONTACT_ENDPOINT` en Vercel.
- [ ] Analytics liviano (Vercel Analytics o Plausible) para saber quién visita y desde dónde.
- [ ] Dominio propio (ej. gonzalogamenara.com) y actualizar `SITE_URL`, `index.html`, `robots.txt`, `sitemap.xml` + `npm run assets`.
- [ ] Revisar la vista previa del link en LinkedIn/WhatsApp (Post Inspector de LinkedIn para refrescar caché).

## Ideas de diseño / movimiento
- [x] Transición entre páginas (View Transitions: la página vieja se va, la nueva sube; header fijo).
- [x] Cursor "magnético" en los botones principales (se acercan levemente al puntero).
- [x] Hover en las capturas de proyectos: scroll automático de la captura completa (efecto "preview de sitio").
- [ ] Sección "Ahora mismo" (now page): qué estás estudiando/construyendo este mes.
- [x] Easter egg: código Konami (↑↑↓↓←→←→BA) vuelve a reproducir la intro.
- [ ] Página de proyecto individual (`/projects/:slug`) para casos de estudio largos (EntreVetas, MIGRA).

## Técnico
- [ ] Prerender/SSG de las rutas (mejor SEO y primera carga) — evaluar `vite-plugin-ssr` o migrar a Astro/Next.
- [ ] Tests e2e dentro del repo (hoy corren desde el entorno de Claude): Playwright + axe en CI con GitHub Actions.
