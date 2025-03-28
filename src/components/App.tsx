import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';


const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return(
    <Router basename="/goit-react-hw-05-movies">
      <Suspense fallback={<div>Loading...please wait</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster/>
    </Router>
  );
};

export default App;
