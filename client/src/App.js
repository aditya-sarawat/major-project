import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Blocks from "./src/blocks";
import Console from "./src/console";

import "./css/background.css";
import "./index.css";

export const UserContext = React.createContext("");

const App = () => {
  const [json, setJson] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  let [output, setOutput] = useState([]); // State for terminal output
  let [input, setInput] = useState(""); // State for user input

  return (
    <Router>
      <div className="paper-background">
        <UserContext.Provider
          value={{
            json,
            setJson,
            pythonCode,
            setPythonCode,
            output,
            setOutput,
            input,
            setInput,
          }}
        >
          <Navbar />
          <div
            className="mainBody"
            style={{ marginTop: "55px", height: "calc(100vh - 55px)" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/blocks" />} />
              <Route path="/blocks" element={<Blocks />} />
              <Route path="/console" element={<Console />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
