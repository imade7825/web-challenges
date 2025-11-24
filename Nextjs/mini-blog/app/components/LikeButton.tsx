// app/components/LikeButton.tsx
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setLikes((prev) => prev + 1)}
      style={{
        padding: "0.6rem 1.2rem",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#0070f3",
        color: "#fff",
      }}
    >
      👍 Like {likes > 0 && <span>· {likes}</span>}
    </button>
  );
}
