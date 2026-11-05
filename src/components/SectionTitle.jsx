import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionTitle({ as: Tag = "h2", children, link, linkLabel, id }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <Tag id={id} className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
        {children}
      </Tag>
      {link && (
        <Link to={link} className="btn bg-surface px-3 py-2 text-xs">
          {linkLabel} <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
