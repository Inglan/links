import { createClient } from "redis";

export const redis = await createClient({
  url: process.env.REDIS_URL,
}).connect();
