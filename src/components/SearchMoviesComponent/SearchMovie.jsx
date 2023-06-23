import { useLocation } from 'react-router-dom';
import { List, Item, MovieLink, Title } from './SearchMovie.styled';

const SearchMovies = ({ movies, searchQuery }) => {
  const location = useLocation();

  return (
    <>
      <Title>Movies for your request: "{searchQuery}"</Title>
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
  );
};

export default SearchMovies;