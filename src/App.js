import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
function App() {
  const isLoggedIn = false;
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <ProfileLayout/> : <AuthLayout />} />
          <Route path="/auth/reset-password/:token" element={<ResetLayout />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
