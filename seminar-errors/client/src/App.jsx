import { useState } from "react";
import "./App.css";

const requests = [
  {
    label: "200 OK",
    endpoint: "/api/users/123",
  },
  {
    label: "400 Bad Request",
    endpoint: "/api/bad-request",
  },
  {
    label: "401 Unauthorized",
    endpoint: "/api/private",
  },
  {
    label: "403 Forbidden",
    endpoint: "/api/admin",
  },
  {
    label: "404 Not Found",
    endpoint: "/api/users/999",
  },
  {
    label: "500 Server Error",
    endpoint: "/api/broken",
  },
];

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendRequest(endpoint) {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`http://localhost:3000${endpoint}`);
      const data = await res.json();

      setResponse({
        status: res.status,
        data,
      });
    } catch (error) {
      setResponse({
        status: "ERROR",
        data: {
          message: "Could not connect to the mock server.",
        },
      });
    }

    setLoading(false);
  }

  return (
    <main className="app">
      <h1>HTTP Error Code Demo</h1>

      <p className="intro">
        Click a request to see how different HTTP responses work.
      </p>

      <section className="buttons">
        {requests.map((request) => (
          <button
            key={request.endpoint}
            onClick={() => sendRequest(request.endpoint)}
          >
            {request.label}
          </button>
        ))}
      </section>

      <section className="response">
        <h2>API Response</h2>

        {loading && <p>Sending request...</p>}

        {!loading && !response && <p className="empty">No request made yet.</p>}

        {!loading && response && (
          <>
            <div className="status">HTTP {response.status}</div>

            <pre>{JSON.stringify(response.data, null, 2)}</pre>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
