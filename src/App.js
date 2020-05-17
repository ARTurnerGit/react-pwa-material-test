import React from "react";
import "./App.css";
import Title from "./components/Title";
import SubscribeButton from "./components/SubscribeButton";
import MapView from "./components/MapView";

function App() {
  return (
    <div className="App">
      <Title />
      <SubscribeButton />
      <MapView />
    </div>
  );
}

export default App;
