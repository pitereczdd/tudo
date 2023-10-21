import React from "react";
import Homepage from "./Homepage";
import Header from "./comp/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={Backend}>
      <Header />
      <Homepage />
    </DndProvider>

  );
};

export default App;
