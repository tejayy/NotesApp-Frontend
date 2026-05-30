import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function DashboardPage() {
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div>Dashboard</div>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;
