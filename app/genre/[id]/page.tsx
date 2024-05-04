import MovieCarousel from '@/components/MovieCarousel'
import { getMovies } from '@/lib/data'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    console.log(id)
    if (!id) notFound

    const idToSearch = decodeURI(id)

    // TODO: filter by genre in the Petition
    const movies = await getMovies()
    return (
        <div className='max-w-7xl mx-auto'>
            {/* Azure OpenAi Suggestion */}
            <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
                <h1 className='text-5xl font-bold px-10'>
                    Results for {genre}
                </h1>

                <MovieCarousel title={genre} movies={movies} isVertical />
            </div>
        </div>
    )
}

export default GenrePage