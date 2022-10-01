import React from "react";
import "./App.css";

const RemoteApp = React.lazy(async () => import("FirstMicroApp/App"));

function App() {
  return (
    <div className="App">
      <p>This is the container app</p>
      <RemoteApp />
    </div>
  );
}

export default App;
