export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          TheArtministree
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.7 }}>
          We don’t design. We structure perception.
        </p>
      </div>
    </main>
  );
}
