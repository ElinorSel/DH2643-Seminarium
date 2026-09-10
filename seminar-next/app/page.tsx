import Counter from "./components/Counter";

export default function Home() {
  const serverTime = new Date().toLocaleTimeString();

  return (
    <main>
      <div className="container">
        <div className="badge">NEXT.JS SSR DEMO</div>

        <h1>Server + Client</h1>

        <p className="subtitle">One page, two rendering environments.</p>

        {/* SERVER COMPONENT */}
        <section className="card server">
          <div className="label">SERVER COMPONENT</div>

          <h2>This content was rendered on the server.</h2>

          <p>
            The server generated this HTML before sending the page to the
            browser.
          </p>

          <div className="time">{serverTime}</div>
        </section>

        {/* CLIENT COMPONENT */}
        <section className="card client">
          <div className="label">CLIENT COMPONENT</div>

          <h2>This part runs in the browser.</h2>

          <p>It needs JavaScript because the user can interact with it.</p>

          {/* IMPORTED COMPONENT */}
          <Counter />
        </section>

        <div className="footer">
          <a href="/demo">→ Go to the routing demo</a>
        </div>
      </div>
    </main>
  );
}
