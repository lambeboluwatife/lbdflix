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
          <form className="search-form">
            <div className="search-input-container">
              <div className="search-icon-container">
                <svg
                  className="search-icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="search-input"
                placeholder="Search for a Movie..."
                required
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
};

export default Header;
