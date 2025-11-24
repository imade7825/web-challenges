import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Blog Posts</h2>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Browse posts from JSONPlaceholder.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 20).map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Link
              href={`/posts/${post.id}`}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#0070f3",
                textDecoration: "none",
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

