import moment from "moment";
import Link from "next/link";

const MovieReview = ({ reviews }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <div className="movie-details-reviews">
        {reviews.map((review) => (
          <div className="movie-details-review" key={review.id}>
            <div className="author">
              <img
                className="review-image"
                src={`${IMG_PATH}${review.author_details.avatar_path}`}
                alt={`${
                  review.author_details.username ||
                  review.author ||
                  review.author_details.name
                } avatar`}
              />
            </div>
            <div className="content">
              <h6>{review.content}</h6>
              <h6>
                {review.author_details.username ||
                  review.author ||
                  review.author_details.name}
              </h6>
              <small>{moment(review.created_at).format("MMM D, YY")}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReview;
