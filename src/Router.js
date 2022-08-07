import { BrowserRouter, Route, Routes } from "react-router-dom";
import Direct from "./Routes/Direct";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import ProfileChange from "./Routes/ProfileChange";
import PasswordChange from "./Routes/PasswordChange"
import Website from "./Routes/Website";
import EmailSettings from "./Routes/EmailSettings";
import PushNotice from "./Routes/PushNotice";
import ContactManagement from "./Routes/ContactManagement";
import Help from "./Routes/Help";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/direct" element={<Direct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profileChange" element={<ProfileChange />}></Route>
        <Route path="PasswordChange" element={<PasswordChange />}></Route>
        <Route path="Website" element={<Website />}></Route>
        <Route path="/EmailSettings" element={<EmailSettings />}></Route>
        <Route path="/PushNotice" element={<PushNotice />}></Route>
        <Route path="/ContactManagement" element={<ContactManagement />}></Route>
        <Route path="/Help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
