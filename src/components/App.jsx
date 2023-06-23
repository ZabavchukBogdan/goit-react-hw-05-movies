import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './LayoutComponents/Layout';

const Home = lazy(() => import('components/pages/Homepage'));
const Movies = lazy(() => import('components/pages/MoviesPage'));
const OneMovie = lazy(() => import('components/pages/OneMoviePage'));
const Cast = lazy(() => import('components/pages/CastPage'));
const Review = lazy(() => import('components/pages/ReviewsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<OneMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};