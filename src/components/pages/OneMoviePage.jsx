import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponents/Loader';
import { getMovieById } from 'services/api';
import OneMovieCom from 'components/OnePageComponents/OneMovie';

const OneMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const goBack = location.state?.from ?? '/';

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const fetchedMovie = await getMovieById(movieId);

        setMovie(fetchedMovie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !loading && <p>Error: {error}</p>}
      <OneMovieCom movie={movie} goBack={goBack} />
    </>
  );
};

export default OneMovie;