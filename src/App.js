import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileLayout />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
