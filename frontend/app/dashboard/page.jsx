"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./dashboard.css";
import DashboardSideNav from "../components/DashboardSideNav";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (!userInfo) {
        const localUserInfo = localStorage.getItem("userInfo");
        if (!localUserInfo) {
          router.push("/sign-in");
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [router, userInfo]);

  return (
    <>
      <div className="column left">
        <DashboardSideNav />
      </div>
      <div className="column right">Right</div>
    </>
  );
};

export default Dashboard;
