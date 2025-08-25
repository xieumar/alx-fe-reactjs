import { useAuthStore } from "./store";
import { useNavigate, Outlet, Link } from "react-router-dom";

function Profile() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome, {user?.name} 👋</h1>
      <button onClick={handleLogout}>Logout</button>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> {/* renders ProfileDetails or ProfileSettings */}
    </div>
  );
}

export default Profile;
