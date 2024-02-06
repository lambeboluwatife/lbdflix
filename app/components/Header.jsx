const Header = () => {
  return (
    <header className="container">
      <h1>LBDFlix</h1>
      <form>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a movie"
        />
      </form>
    </header>
  );
};

export default Header;
