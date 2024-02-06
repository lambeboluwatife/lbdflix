const Hero = ({ heroData }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${IMG_PATH}${heroData.backdrop_path})`,
      }}
    >
      <h1>{heroData.title}</h1>
    </div>
  );
};

export default Hero;
