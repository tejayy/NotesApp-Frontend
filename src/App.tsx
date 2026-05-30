import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SignUpPage from "./pages/auth/RegisterPage";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={<h1 className="text-3xl font-bold underline">Notes App</h1>}
        />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
