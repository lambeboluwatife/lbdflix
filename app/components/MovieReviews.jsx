import moment from "moment";
import Link from "next/link";

const MovieReviews = ({ reviews }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div>
      <div className="movie-details-reviews">
        {reviews.map((review) => (
          <Link href={`/reviews/${review.id}`} key={review.id}>
            <div className="movie-details-review">
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
                <h6>
                  {review.content.length > 100
                    ? review.content.substring(0, 100) + "..."
                    : review.content}
                </h6>
                <div className="footer">
                  <h6 className="username">
                    {review.author_details.username ||
                      review.author ||
                      review.author_details.name}
                  </h6>
                  <h6 className="date">
                    {moment(review.created_at).format("MMM D, YY")}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;
