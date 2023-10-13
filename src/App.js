import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Mycleaner from "./Pages/MyCleaner/Mycleaner";
import Profile from "./Pages/Profile/Profile";
import Mysites from "./Pages/MySites/Mysites";
import SiteArea from "./Pages/Area/SiteArea";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mycleaner" element={<Mycleaner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mysites" element={<Mysites />} />
        <Route path="/sitearea" element={<SiteArea />} />
        SiteArea
      </Routes>
    </BrowserRouter>
  );
}

export default App;
