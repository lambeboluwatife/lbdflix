import Link from "next/link";

const Header = ({ backgroundColor }) => {
  const navbarStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="nav" style={navbarStyle}>
      <div className="container">
        <header>
          <Link href="/">
            <h1>LBDFlix</h1>
          </Link>
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for a movie"
            />
          </form>
        </header>
      </div>
    </div>
  );
};

export default Header;
