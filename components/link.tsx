"use client";

import { Link } from "@/lib/types";
import { Button } from "./ui/button";
import { Pencil, Trash } from "lucide-react";

export default function LinkComponent({ link }: { link: Link }) {
  return (
    <div className="border flex flex-row p-2 items-center">
      <div className="flex flex-col grow">
        <h2 className="text-lg">/{link.path}</h2>
        <h3 className="text-sm text-neutral-400">{link.link}</h3>
        <h3 className="text-sm text-neutral-400">
          {new Date(link.createdAt).toLocaleString()}
        </h3>
      </div>
      <div className="flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => console.log("Delete")}
        >
          <Trash />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => console.log("Edit")}>
          <Pencil />
        </Button>
      </div>
    </div>
  );
}
