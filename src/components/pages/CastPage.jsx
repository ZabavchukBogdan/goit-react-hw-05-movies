import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/LoaderComponents/Loader';
import { getCast } from 'services/api';
import CastCom from 'components/CastComponents/Cast';

const Cast = () => {
    const [movieCast, setMovieCast] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const { movieId } = useParams()
    

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                const fetchedCast = await getCast(movieId)
                setMovieCast(fetchedCast)
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    setError(error.massage)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchCast()
    }, [movieId])

    return (
        <>
            {loading && <Loader />}
            {error && ~loading && <p>Error: {error}</p>}
            <CastCom movieCast={movieCast} />
            
        </>
    )

}


export default Cast;