async function fetchReview(id) {
const apiKey = process.env.MOVIE_API;

  const response = await fetch(
    `https://api.themoviedb.org/3/review/${id}?api_key=${apiKey}`
  );
  const review = await response.json();
  return review;
}

const MovieReview = async ({ id }) => {
  const review = await fetchReview(id);
  console.log(review);
  return <div>Movie Review</div>;
};

export default MovieReview;
