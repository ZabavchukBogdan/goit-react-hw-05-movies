import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponents/Loader';
import { getReviews } from 'services/api';
import ReviewsCom from 'components/ReviewsComponents/Reviews';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const fetchedReviews = await getReviews(movieId);

        setMovieReviews(fetchedReviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !loading && <p>Error: {error}</p>}
      <ReviewsCom movieReviews={movieReviews} />
    </>
  );
};

export default Reviews;