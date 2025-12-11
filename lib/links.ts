"use server";

export async function create(link: string, path: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
