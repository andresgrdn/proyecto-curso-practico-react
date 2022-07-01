import React from "react";
import '../styles/global.scss';

const App = () => {
  const view = (
    <div className="main-container">
      <h1>Hello world I'm using React to build this site!</h1>
      <p>
        I'm a message from the react app, hello there. I'm going to introduce myself, I'm Arcano a frontend developer who enjoys maths, logic and design as well.
      </p>
      <h2>This is some other list</h2>
      <ul>
        <li>Hello</li>
        <li>Some other message</li>
        <li>I'm only waiting something</li>
        <li>Bye I'm the las item</li>
      </ul>
    </div>
  );

  return view;
}

export default App;