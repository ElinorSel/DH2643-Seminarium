export default function DemoPage() {
  return (
    <main>
      <div className="container">
        <div className="badge">FILE-BASED ROUTING</div>

        <h1>Hello from /demo</h1>

        <p className="subtitle">
          This page exists because of the folder structure.
        </p>

        <section className="card">
          <h2>app/demo/page.tsx</h2>

          <p>Next.js automatically maps this file to:</p>

          <div className="route">/demo</div>
        </section>

        <div className="footer">
          <a href="/">← Back to SSR demo</a>
        </div>
      </div>
    </main>
  );
}
