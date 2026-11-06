import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePreferences } from "../context/preferences";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  const { s } = usePreferences();
  usePageMeta(s.meta.notFound, s.notFound.text);
  return (
    <div className="container-page flex min-h-[60dvh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm text-accent">{s.notFound.title}</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{s.notFound.text}</h1>
      <Link viewTransition to="/" data-magnetic className="btn btn-primary mt-8">
        <ArrowLeft size={16} aria-hidden="true" /> {s.notFound.back}
      </Link>
    </div>
  );
}
