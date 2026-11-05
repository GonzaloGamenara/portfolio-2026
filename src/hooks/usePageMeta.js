import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../data/profile";

const NAME = "Gonzalo Gamenara";

/** Keeps <title>, description, canonical and OG tags in sync with the current route. */
export default function usePageMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    const full = title.includes(NAME) ? title : `${title} · ${NAME}`;
    document.title = full;
    const set = (selector, attr, value) => document.querySelector(selector)?.setAttribute(attr, value);
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", full);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]', "content", SITE_URL + pathname);
    set('link[rel="canonical"]', "href", SITE_URL + pathname);
  }, [title, description, pathname]);
}
