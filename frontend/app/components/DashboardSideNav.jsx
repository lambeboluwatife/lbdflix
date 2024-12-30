import Link from "next/link";
import "../dashboard/dashboard.css";
import UserProfile from "./UserProfile";

const DashboardSideNav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="dashboard-nav">
      <div className="user-profile">
        <UserProfile />
      </div>
      <div className="dashboard-main">
        <h4>MAIN</h4>
        <div className="nav-links">
          <div
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </div>
          <div
            className={`nav-item ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            Favorites
          </div>
          <div
            className={`nav-item ${
              activeTab === "new-releases" ? "active" : ""
            }`}
            onClick={() => setActiveTab("new-releases")}
          >
            New Releases
          </div>
          <div
            className={`nav-item ${
              activeTab === "liked-movies" ? "active" : ""
            }`}
            onClick={() => setActiveTab("liked-movies")}
          >
            Liked Movies
          </div>
          <div
            className={`nav-item ${
              activeTab === "coming-soon" ? "active" : ""
            }`}
            onClick={() => setActiveTab("coming-soon")}
          >
            Coming Soon
          </div>
          <div
            className={`nav-item ${
              activeTab === "recommended" ? "active" : ""
            }`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
