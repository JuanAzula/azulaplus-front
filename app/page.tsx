import React from 'react';
import BannerWrapper from '@/components/BannerWrapper';
import MovieCarousel from '@/components/MovieCarousel';
import { getMovies, getSeries } from '@/lib/data';
import { shuffle } from 'lodash';

export default async function Home() {
  const movies = await getMovies();
  const series = await getSeries();
  const moviesAndSeries = [...movies, ...series];
  const shuffledMoviesAndSeries = shuffle(moviesAndSeries);

  return (
    <main className="">
      <BannerWrapper movies={shuffledMoviesAndSeries} />
      <div className="flex flex-col space-y-2 4xl:-mt-48 ">
        <MovieCarousel movies={movies} title="Upcoming" />
        <MovieCarousel movies={movies} title="Trending Movies" />
        <MovieCarousel movies={series} title="Most watched Series" />
      </div>
    </main>
  );
}
