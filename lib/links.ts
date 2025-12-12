"use server";

import { redis } from "./redis";

export async function create(link: string, path: string) {
  const existing = await redis.get(`link:${path}`);
  if (existing) throw new Error("Link already exists");
  await redis.set(
    `link:${path}`,
    JSON.stringify({ link, createdAt: Date.now() }),
  );
}
