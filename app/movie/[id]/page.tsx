import { MovieForm } from '@/components/MovieForm'
import { getMovieById } from '@/lib/data'
import React from 'react'

type Props = {
    params: {
        id: string
    },
    searchParams: {
        title: string
    }
}

async function MovieDetailPage({ params: { id }, searchParams: { title } }: Props) {
    console.log(id, title)
    const movie = await getMovieById(id)
    console.log(movie)
    return (
        <div>
            <h1>{movie?.title}</h1>
            <p>{movie?.description}</p>
            <p>{movie?.releaseYear}</p>
            <p>{movie?.genresName}</p>
            <p>{movie?.score}</p>
            <p>{movie?.authorEmail}</p>
            <MovieForm currentMovie={movie} />
        </div>
    )
}

export default MovieDetailPage