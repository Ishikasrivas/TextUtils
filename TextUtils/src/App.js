import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import * as React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //weather dark mode is snabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Has Been Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below  "
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <About /> */}
    </>
  );
}
export default App;
