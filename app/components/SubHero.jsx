const SubHero = ({ movies }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  // Function to get five random items from the array of objects
  function getRandomMovies(array, numItems) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numItems);
  }

  // Get five random items
  const randomMovies = getRandomMovies(movies, 5);

  return (
    <div className="sub-hero">
      <div className="container">
        <div className="events">
          <div className="grid grid-5">
            {randomMovies.map((movie) => (
              <div className="event-item" key={movie.id}>
                <img
                  className="event__image"
                  src={`${IMG_PATH}${movie.backdrop_path}`}
                  alt={`${movie.title} backdrop`}
                />
                <div className="event__content">
                  <h5 className="event__content--title">
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
