import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const MovieReviews = ({ reviews }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  function showAvatar(avatarFromApi) {
    if (!avatarFromApi) {
      return "https://t3.ftcdn.net/jpg/01/26/91/78/360_F_126917812_XlWgkaV9f81Hde4wvmvJWM3huJRvy5EM.webp";
    } else {
      return IMG_PATH + avatarFromApi;
    }
  }

  const firstFiveReviews = reviews.slice(0, 5);

  return (
    <div>
      <div className="movie-details-reviews">
        {firstFiveReviews.map((review) => (
          <Link href={`/reviews/${review.id}`} key={review.id}>
            <div className="movie-details-review">
              <div className="author">
                <Image
                  className="review-image"
                  width={100}
                  height={100}
                  src={showAvatar(review.author_details.avatar_path)}
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
