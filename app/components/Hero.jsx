const Hero = ({ heroMovie }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${IMG_PATH}${heroMovie.backdrop_path})`,
      }}
    >
      <div className="showcase">
        <div className="container">
          <h1>{heroMovie.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
