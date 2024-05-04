import { Movie } from '@/types/movie.data'
import React from 'react'
import CarouselBanner from './CarouselBanner'

type Props = {
    id: string
    keywords: string
    movies: Movie[]
}
function BannerWrapper({ id, keywords, movies }: Props) {
    return (
        <CarouselBanner movies={movies} />
    )
}

export default BannerWrapper