import MovieReview from "@/app/components/MovieReview";

const MovieReviewPage = ({ params: { id } }) => {
  return (
    <div>
      <MovieReview id={id} />
    </div>
  );
};

export default MovieReviewPage;
