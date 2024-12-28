import Link from "next/link";
import "../dashboard/dashboard.css";
import UserProfile from "./UserProfile";

const DashboardSideNav = () => {
  return (
    <div className="dashboard-nav">
      <div className="user-profile">
        <UserProfile />
      </div>
      <div className="dashboard-main">
        <h4>MAIN</h4>
        <div className="nav-links">
          <Link href="/dashboard/home">
            <div className="nav-item">Home</div>
          </Link>
          <Link href="/dashboard/favorites">
            <div className="nav-item">Favorites</div>
          </Link>
          <Link href="/dashboard/new-releases">
            <div className="nav-item">New Releases</div>
          </Link>
          <Link href="/dashboard/liked-movies">
            <div className="nav-item">Liked Movies</div>
          </Link>
          <Link href="/dashboard/coming-soon">
            <div className="nav-item">Coming Soon</div>
          </Link>
          <Link href="/dashboard/recommended">
            <div className="nav-item">Recommended</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
