export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
        background: "#ffffff",
        color: "#111111",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <section>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "0.06em",
          }}
        >
          FRONTVISIONX
        </h1>
        <p style={{ marginTop: 12, marginBottom: 0, fontSize: "1.1rem", opacity: 0.8 }}>
          Coming Soon...
        </p>
      </section>
    </main>
  );
}
