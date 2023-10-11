import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Mycleaner from "./Pages/MyCleaner/Mycleaner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mycleaner" element={<Mycleaner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
