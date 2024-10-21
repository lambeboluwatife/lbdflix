'use client'
import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import styles from '../reviews/[id]/page.module.css';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const MovieReview = ({ id }) => {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/review/${id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch review');
        }
        const data = await response.json();
        setReview(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  function showAvatar(avatarFromApi) {
    if (!avatarFromApi) {
      return "https://t3.ftcdn.net/jpg/01/26/91/78/360_F_126917812_XlWgkaV9f81Hde4wvmvJWM3huJRvy5EM.webp";
    } else {
      return IMG_PATH + avatarFromApi;
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!review) return <div>No review found</div>;

  return (
    <div className={styles['full-movie-review']}>
      <div className={styles['author-info']}>
        <Image
          className={styles['review-image']}
          width={40}
          height={40}
          src={showAvatar(review.author_details.avatar_path)}
          alt={`${review.author_details.username || review.author} avatar`}
        />
        <div className={styles['author-details']}>
          <h3>{review.author_details.username || review.author}</h3>
          <p>{moment(review.created_at).format("MMMM D, YYYY")}</p>
        </div>
      </div>
      <div className={styles['review-content']}>
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default MovieReview;
