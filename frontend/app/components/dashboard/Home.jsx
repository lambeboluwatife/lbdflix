"use client";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const { userInfo } = useSelector((state) => state.auth);

  function getTimeOfDay() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good morning &#x1F305;";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }

  const timeOfDay = getTimeOfDay();

  return (
    <div className="dashboard-home">
      <h1>{timeOfDay}</h1>
      <h6>{userInfo?.username}</h6>
    </div>
  );
};

export default DashboardHome;
