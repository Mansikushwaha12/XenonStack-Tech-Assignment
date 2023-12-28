import "./App.css";
import Register from "./Register/Register";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import { useState } from "react";
import ContactUs from "./Contact/Contact";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<SignUp setLoginUser={setLoginUser} user={user} />}
          />
          <Route path="/dash" element={<DashBoard />} />
          <Route
            path="/login"
            element={<SignUp setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
