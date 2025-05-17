import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {  
//     path: "/about",
//     element:<About/>
//   }
// ]);

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <TextForm heading="Enter the text analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
