// KEIN "use client" in dieser Datei!

import { notFound } from "next/navigation";
import LikeButton from "@/app/components/LikeButton";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  // ⬅️ Promise auflösen
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch post (status ${res.status})`);
  }

  const post = (await res.json()) as Post;

  return (
    <article
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{post.title}</h1>
      <p style={{ marginBottom: "1.5rem", color: "#777" }}>Post #{post.id}</p>
      <p style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>{post.body}</p>

      <div style={{ marginTop: "2rem" }}>
        <LikeButton />
      </div>
    </article>
  );
}
