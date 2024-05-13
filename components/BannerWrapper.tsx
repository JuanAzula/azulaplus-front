import { Movie } from '@/types/movie.data';
import React from 'react';
import CarouselBanner from './CarouselBanner';

type Props = {
  movies: Movie[]
};
function BannerWrapper({ movies }: Props) {
  return (
    <CarouselBanner movies={movies} />
  );
}

export default BannerWrapper;
