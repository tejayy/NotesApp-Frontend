import type { ReactNode } from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="auth/login" />;
  }

  return children;
}

export default ProtectedRoute;
