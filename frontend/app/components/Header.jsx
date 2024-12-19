"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import SearchMovie from "./SearchMovie";

const Header = ({ backgroundColor }) => {
  const { userInfo } = useSelector((state) => state.auth);
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
            {userInfo ? (
              <>
                <Link href="/dashboard">
                  <div className="user-info">
                    <img
                      src={userInfo.avatar}
                      alt="User Avatar"
                      className="user-avatar"
                    />
                    <span className="user-name">{userInfo.username}</span>
                  </div>
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
