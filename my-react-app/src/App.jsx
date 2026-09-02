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
    <div>
      <h1>Lazy loading demo</h1>
      <p>Lazy Component: The component is lazy loaded and therefore its JavaScript is only loaded when the button is pressed, as can be seen in the Network tab.</p>
      <p>Excited Component: The component is not lazy loaded, so its JavaScript is included in the initial page load and is already visible in the Network tab. </p>
      <p>note: The both images appear on the button clicks as they are requested on click </p>
    </div>
      <button onClick={() => setIsShown(!isShown)}>Lazy Component</button>
      {isShown && <Suspense fallback = "Loading...">
        <LazyComponent />
      </Suspense>}
      <button onClick={() => setIsShown2(!isShown2)}>Excited Component</button>
      {isShown2 && <ExcitedComponent/>}
      
    </>
  );
}

export default App;
