import MovieForm from '@/components/MovieForm';
import { getMovieById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    id: string
  },
  searchParams: {
    title: string
  }
};

async function MovieDetailPage({ params: { id }, searchParams: { title } }: Props) {
  console.log(id, title);
  const movie = await getMovieById(id);
  console.log(movie);
  return (
    <div>
      <Image className="mx-auto mt-12" src={movie?.poster_img || ''} alt={movie?.title} width={200} height={200} />
      <div className="flex flex-row space-x-2">
        <h1>{movie?.title}</h1>
        <p>{movie?.description}</p>
        <p>
          {' '}
          Date:
          {movie?.releaseYear}
        </p>
        <p>{movie?.genresName}</p>
        <p>{movie?.score}</p>
        <p>{movie?.authorEmail}</p>
        I
      </div>
      <MovieForm currentMovie={movie} />
    </div>
  );
}

export default MovieDetailPage;
