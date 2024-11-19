"use client";
import Link from "next/link";
import SearchMovie from "./SearchMovie";

const Header = ({ backgroundColor }) => {
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
        </header>
      </div>
    </div>
  );
};

export default Header;
