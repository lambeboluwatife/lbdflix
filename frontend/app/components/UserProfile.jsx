"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hydrateUserInfo } from "@/redux/slices/authSlice";
import { usePathname } from "next/navigation";
import UserInfoSkeletonLoader from "./UserInfoSkeletonLoader";

const UserProfile = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(hydrateUserInfo());
  }, [dispatch]);

  if (!userInfo) {
    return <UserInfoSkeletonLoader />;
  }

  return (
    <div className="user-info">
      <img src={userInfo.avatar} alt="User Avatar" className="user-avatar" />
      <div>
        {pathname === "/dashboard" && (
          <h4 className="user-name">{userInfo.name}</h4>
        )}
        <span className="user-name">{userInfo.username}</span>
      </div>
    </div>
  );
};

export default UserProfile;
