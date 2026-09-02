import { Suspense } from "react";
import "./App.css";
import React from "react";
import { lazy } from "react";
import { useState } from "react";
import ExcitedComponent from "./ExcitedComponent";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>Lazy Component</button>
      {isShown && <Suspense fallback = {<span className="loader"></span>}>
        <LazyComponent />
      </Suspense>}
      <button onClick={() => setIsShown2(!isShown2)}>Excited Component</button>
      {isShown2 && <ExcitedComponent/>}
      
    </>
  );
}

export default App;
