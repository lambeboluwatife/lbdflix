const SubHero = ({ movies }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  function getRandomMovies(array, numItems) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numItems);
  }

  const randomMovies = getRandomMovies(movies, 5);

  return (
    <div className="sub-hero">
      <div className="container">
        <div className="sub-hero-cards">
          <div className="grid grid-5">
            {randomMovies.map((movie) => (
              <div className="sub-hero-card-item" key={movie.id}>
                <img
                  className="sub-hero-card__image"
                  src={`${IMG_PATH}${movie.backdrop_path}`}
                  alt={`${movie.title} backdrop`}
                />
                <div className="sub-hero-card__content">
                  <h5 className="sub-hero-card__content--title">
                    {movie.title.length > 30
                      ? movie.title.substring(0, 30) + "..."
                      : movie.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
