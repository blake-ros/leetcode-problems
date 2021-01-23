// import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return "New Button";
}

// create a react component
const App = () => {
  const buttonText = "Click Me!"
  return (
      <div>
        <label className="label" for="name">
          Enter name:
        </label>
        <input id="name" type="text" />
        <button style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
        <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
      </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
