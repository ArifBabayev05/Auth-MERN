import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ActiviteLayout from "./Layouts/ActiviteLayout/ActiviteLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
function App() {
  const isLoggedIn = true;
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />} />
          <Route path="/auth/reset-password/:token"  element={<ResetLayout />} />
          <Route path="/api/auth/activate/:activate_token" element={<ActiviteLayout/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
