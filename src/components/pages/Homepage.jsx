import { useState, useEffect } from 'react';
import { Loader } from 'components/LoaderComponents/Loader';
import { fetchTrendingMovies } from 'services/api';
import  MoviesList  from 'components/MoviesListComponent/MoviesList';


const Home = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMoviesList = async () => {
            try {
                setLoading(true)
                const fetchedFilms = await fetchTrendingMovies()
                setMovies(fetchedFilms)
            } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
            } finally {
                setLoading(false);
            }
        }
        fetchMoviesList()
    }, [])
    
    return (
        <main>
            {loading && <Loader />}
            {error && !loading && <p>Error: {error}</p>}
            <MoviesList movies={movies}/>
        </main>
    )

}

export default Home;