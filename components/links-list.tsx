"use client";

import { Link } from "@/lib/types";
import CreateLink from "./create-link";

export default function LinksList({ links }: { links: Link[] }) {
  return (
    <>
      <CreateLink />
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            {link.link}
            {link.path}
          </li>
        ))}
      </ul>
    </>
  );
}
