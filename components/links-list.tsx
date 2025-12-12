"use client";

import { Link } from "@/lib/types";
import CreateLink from "./create-link";
import { useState } from "react";
import * as linksApi from "@/lib/links";

export default function LinksList({ links: serverLinks }: { links: Link[] }) {
  const [links, setLinks] = useState(serverLinks);

  async function refetch() {
    setLinks(await linksApi.list());
  }

  return (
    <>
      <CreateLink refetch={refetch} />
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
