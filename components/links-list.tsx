"use client";

import { Link } from "@/lib/types";
import CreateLink from "./create-link";
import { useState } from "react";

export default function LinksList({ links: serverLinks }: { links: Link[] }) {
  const [links, setLinks] = useState(serverLinks);

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
