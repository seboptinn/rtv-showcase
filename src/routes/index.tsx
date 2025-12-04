import { useState } from "react";
import classes from "../App.module.css";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  const handleCountClick = () => {
    setCount(count == 10 ? 1 : count + 1);
  };

  return (
    <main className="flex flex-col items-center justify-center px-20 text-center">
      <h2>Velkommen til RTV Showcase!</h2>
      <p>Dette er telleren din. Vær forsiktig!</p>
      <div className={classes.card}>
        <button onClick={handleCountClick}>Klikk: {count}</button>
      </div>
    </main>
  );
}
