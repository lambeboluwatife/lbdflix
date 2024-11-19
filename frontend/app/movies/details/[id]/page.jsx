// import MovieDetails from "@/frontend/app/components/MovieDetails";
import { MovieDetails } from "../../../components";

const MoviesDetailsPage = ({ params: { id } }) => {
  return (
    <div>
      <MovieDetails id={id} />
    </div>
  );
};

export default MoviesDetailsPage;
