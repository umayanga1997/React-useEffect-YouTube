import { useState, useEffect } from "react";

function App() {
  const [currentState, setCurrentState] = useState("");

  // Without dependencies
  useEffect(() => {
    // Console Message
    console.log(
      "The useEffect runs with null dependencies!, runs on every render."
    );
  });

  // With empty Array
  useEffect(() => {
    // Console Message
    console.log(
      "The useEffect runs with The Empty Array!, runs on first render."
    );
  }, []);

  // With State or Prop value
  useEffect(() => {
    // Console Message
    console.log(
      "The useEffect runs with the State value!, runs when the State value updates."
    );
  }, [currentState]);

  return (
    <div className="container">
      <p>{currentState}</p>
      <button
        onClick={() =>
          setCurrentState("State was updated with: " + Math.random())
        }
      >
        Click
      </button>
    </div>
  );
}

export default App;
