export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "1rem 2rem",
        borderTop: "1px solid #e5e5e5",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#666",
      }}
    >
      © {new Date().getFullYear()} Mini Blog. All rights reserved.
    </footer>
  );
}
