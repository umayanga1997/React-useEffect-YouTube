import { useState } from "react";

function App() {
  const [currentState, setCurrentState] = useState("");

  return (
    <div className="container">
      <p>{currentState}</p>
      <button onClick={() => setCurrentState("State was updated!")}>
        Click
      </button>
    </div>
  );
}

export default App;
