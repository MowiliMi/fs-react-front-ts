import React from "react";
import "./App.css";
import * as filestack from "filestack-js";

function App() {
  const pickerOptions = {};
  const open = async () => {
    const client = filestack.init("");
    const picker = await client.picker(pickerOptions);
    picker.open();
  };
  open();

  return <div className="App"></div>;
}

export default App;
