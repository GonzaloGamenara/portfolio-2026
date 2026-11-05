import { Link } from "react-router-dom";
import { usePreferences } from "../context/preferences";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  const { s } = usePreferences();
  usePageMeta(s.meta.notFound, s.notFound.text);
  return (
    <div className="flex min-h-[50dvh] flex-col items-center justify-center gap-6 text-center">
      <p className="card on-accent rotate-[-3deg] bg-pink px-8 py-4 font-mono text-7xl font-bold sm:text-8xl">{s.notFound.title}</p>
      <h1 className="font-mono text-2xl font-bold">{s.notFound.text}</h1>
      <Link to="/" className="btn bg-black text-white">
        {s.notFound.back}
      </Link>
    </div>
  );
}
