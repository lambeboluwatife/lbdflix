import MovieDetails from "@/app/components/MovieDetails";

const MoviesDetailsPage = ({ params: { id } }) => {
  return (
    <div>
      <MovieDetails id={id} />
    </div>
  );
};

export default MoviesDetailsPage;
