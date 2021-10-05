import endpoint from '@utils/endpoint';

export const movieInfoEndpoint = id => endpoint('movie', 'GET', `/movie/${id}`);
