import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";

/** Open project lives in the URL (?p=slug) so a project can be shared as a link. */
export default function useProjectModal() {
  const [params, setParams] = useSearchParams();
  const slug = params.get("p");
  const project = projects.find((p) => p.slug === slug) ?? null;

  const open = useCallback(
    (next) =>
      setParams(
        (prev) => {
          const p = new URLSearchParams(prev);
          p.set("p", next);
          return p;
        },
        { preventScrollReset: true },
      ),
    [setParams],
  );

  const close = useCallback(
    () =>
      setParams(
        (prev) => {
          const p = new URLSearchParams(prev);
          p.delete("p");
          return p;
        },
        { preventScrollReset: true, replace: true },
      ),
    [setParams],
  );

  return { project, open, close };
}
