import { getCollection } from "astro:content";

// For listings (blog index, homepage, RSS) — excludes draft AND hidden
export async function getPosts() {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft && !post.data.hidden)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// For static path generation — excludes draft only (hidden posts still get pages)
export async function getAllPosts() {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
