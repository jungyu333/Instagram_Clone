import { BrowserRouter, Route, Routes } from "react-router-dom";
import Direct from "./Routes/Direct";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/direct" element={<Direct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
