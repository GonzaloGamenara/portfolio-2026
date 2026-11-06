import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionTitle({ eyebrow, title, intro, link, linkLabel, id, as: Tag = "h2" }) {
  return (
    <div data-reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <Tag id={id} className="text-3xl font-bold sm:text-4xl">
          {title}
        </Tag>
        {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {link && (
        <Link to={link} className="btn btn-ghost -ml-3 self-start sm:ml-0 sm:self-auto">
          {linkLabel} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
