import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MapPage from "./components/MapPage";
// import AutoComplete from "./components/AutoComplete";

function App() {
  return (
    <div>
      <MapPage />
      {/* <AutoComplete /> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
