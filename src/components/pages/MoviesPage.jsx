import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponents/Loader';

import { searchMovie } from 'services/api';
import MoviesPageCom from 'components/MoviesPageComponents/MoviesPageCom';
import SearchMovies from 'components/SearchMoviesComponent/SearchMovie';
import { TextMessage } from 'components/MoviesPageComponents/MoviesPageCom.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const [query, setQuery] = useState(() => searchQuery || '');

  const abortCtrl = useRef();


  useEffect(() => {
    const fetchMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setLoading(true);

        const fetchedSearchedMovies = await searchMovie(
          searchQuery,
          abortCtrl.current.signal
        );

        setMovies(fetchedSearchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);
 
  const handleChange = event => {
    setQuery(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      alert('Please enter some title to search ');
      return;
    }
    setSearchParams({ query });
  };

  return (
    <>
      <MoviesPageCom
        handleSubmit={handleSubmit}
        query={query}
        handleChange={handleChange}
      ></MoviesPageCom>

      {loading && <Loader />}
      {error && !loading && <TextMessage>Error: {error}</TextMessage>}

      {movies.length !== 0 && (
        <SearchMovies movies={movies} searchQuery={searchQuery} />
      )}
     
      {!error && !loading && searchQuery && movies.length === 0 && (
        <TextMessage>No movies found with this title</TextMessage>
      )}
    </>
  );
};

export default Movies;