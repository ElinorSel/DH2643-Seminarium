"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [clientTime, setClientTime] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      setClientTime(time);
      console.log("Client generated at: ", time);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="counter">
        <div className="count">{count}</div>
        <button onClick={() => setCount(count + 1)}>+ Increase</button>
      </div>
      <p className="time">Client generated at: {clientTime ?? "Loading..."}</p>
    </>
  );
}
