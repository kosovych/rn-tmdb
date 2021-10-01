import endpoint from '@utils/endpoint';

export const trendingMovies = endpoint(
  'trendingMovies',
  'POST',
  '/trending/movie/day',
);

export const searchMovies = endpoint('searchMovies', 'POST', '/search/movie');
