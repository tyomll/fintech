import Link from "next/link";
import type { FC } from "react";

type Props = {
  title: string;
  links: { label: string; href: string }[];
};

const LandingPageFooterLinksColumn: FC<Props> = ({ title, links }) => (
  <div>
    <h3 className="text-white font-semibold text-lg mb-6">{title}</h3>
    <ul className="space-y-4">
      {links.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
            tabIndex={0}
            aria-label={item.label}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LandingPageFooterLinksColumn;
