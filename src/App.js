import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Lorraine Barnes"
        avatar="https://randomuser.me/api/portraits/women/66.jpg"
        status={true}
      />
      <Contact
        name="Bertha Lynch"
        avatar="https://randomuser.me/api/portraits/women/19.jpg"
        status={false}
      />
      <Contact
        name="Marcus Jensen"
        avatar="https://randomuser.me/api/portraits/men/11.jpg"
        status={false}
      />
    </div>
  );
}

export default App;

