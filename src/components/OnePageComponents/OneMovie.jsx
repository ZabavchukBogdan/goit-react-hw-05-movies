import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/LoaderComponents/Loader";
import {
  GoBackLink,
  Container,
  Image,
  Text,
  LinkContainer,
  StyledLink,
} from './OneMovie.styled';


const OneMovieCom = ({ movie, goBack }) => {
    if (!movie) {
        return
    }
     const {
        title,
        release_date,
        popularity,
        overview,
        genres,
        poster_path,
        original_title,
    } = movie;
    
    return (
        <>
            <GoBackLink to={goBack}>Back</GoBackLink>
            <Container>
                <Image
                    alt={original_title}
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <div>
                    <h2>"{title}"</h2>
                    <Text>Release date: {release_date}</Text>
                    <Text>User Score: {popularity}</Text>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {genres.map(genre => (
                            <li key={ genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </Container>
            <LinkContainer>
                <StyledLink to="cast" state={{ from: goBack }}>Cast</StyledLink>
                <StyledLink to="reviews" state={{from: goBack}}>Reviews</StyledLink>
            </LinkContainer>
            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default OneMovieCom;
