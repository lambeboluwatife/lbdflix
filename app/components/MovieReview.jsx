async function fetchReview(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/review/${id}?api_key=acd2e2d961bd794fcc2ffc03671385e8`
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
