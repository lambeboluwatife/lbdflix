"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import SearchMovie from "./SearchMovie";
import UserProfile from "./UserProfile";
import { hydrateUserInfo } from "@/redux/slices/authSlice";

const Header = ({ backgroundColor }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(hydrateUserInfo());
    setIsLoading(false);
  }, [dispatch]);

  const navbarStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="nav" style={navbarStyle}>
      <div className="container">
        <header style={navbarStyle}>
          <Link href="/">
            <h1>LBDFlix</h1>
          </Link>
          <SearchMovie />
          <div className="header-links">
            {isLoading ? (
              <div>Loading...</div>
            ) : userInfo ? (
              <>
                <Link href="/dashboard">
                  <UserProfile />
                </Link>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <h4>Sign In</h4>
                </Link>
                <Link href="/sign-up">
                  <h4>Sign Up</h4>
                </Link>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
