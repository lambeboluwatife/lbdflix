"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import "./dashboard.css";
import DashboardSideNav from "../components/DashboardSideNav";
import DashboardHome from "../components/dashboard/Home";
import Favorites from "../components/dashboard/Favorites";
import LikedMovies from "../components/dashboard/LikedMovies";
import NewReleases from "../components/dashboard/NewReleases";
import ComingSoon from "../components/dashboard/ComingSoon";
import Recommended from "../components/dashboard/Recommended";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "favorites":
        return <Favorites />;
      case "new-releases":
        return <NewReleases />;
      case "liked-movies":
        return <LikedMovies />;
      case "coming-soon":
        return <ComingSoon />;
      case "recommended":
        return <Recommended />;
      default:
        return <DashboardHome />;
    }
  };

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
        <DashboardSideNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="column right">
        {" "}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Dashboard;
