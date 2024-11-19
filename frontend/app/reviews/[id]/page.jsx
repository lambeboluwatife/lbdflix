import MovieReview from "@/frontend/app/components/MovieReview";
import styles from "./page.module.css";

const MovieReviewPage = ({ params: { id } }) => {
  return (
    <div className={styles["movie-review-page"]}>
      <div className={styles["review-container"]}>
        <h2>Full Movie Review</h2>
        <MovieReview id={id} />
      </div>
    </div>
  );
};

export default MovieReviewPage;
