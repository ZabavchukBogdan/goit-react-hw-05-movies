import { useLocation } from "react-router-dom";
import { List, Item, MovieLink, Title } from './MoviesList.styled'

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <>
            <Title>Trending today</Title>
            <List>
                {movies.map(({ id, title }) => (
                    <Item key={id}>
                        <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                            {title}
                        </MovieLink>
                    </Item>
                ))}
            </List>
        </>
    )
}

export default MoviesList;