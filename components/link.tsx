"use client";

import { Link } from "@/lib/types";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

export default function LinkComponent({ link }: { link: Link }) {
  return (
    <div className="p-2 border flex flex-row">
      <div className="flex flex-col grow">
        <h2 className="text-lg">/{link.path}</h2>
        <h3 className="text-sm text-neutral-400">{link.link}</h3>
      </div>
      <Button variant="ghost" size="icon" onClick={() => console.log("Delete")}>
        <Trash />
      </Button>
    </div>
  );
}
