import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    console.log("Upper was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    console.log("Clear Button was clicked");
    let newText = "";
    setText(newText);
    props.showAler("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text = "new text"; //wrong way
  //   setText("New Text"); //correct way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear
        </button>
      </div>
      <div
        className="container mt-3 "
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
