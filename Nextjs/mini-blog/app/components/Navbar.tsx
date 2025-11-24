import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Mini Blog</h1>
      </Link>

      <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>
        Home
      </Link>
    </nav>
  );
}
