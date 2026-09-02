import { Suspense } from "react";
import "./App.css";
import React from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <>
      <div className="hero-section">WELCOME</div>
      <Suspense fallback="loading">
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default App;
