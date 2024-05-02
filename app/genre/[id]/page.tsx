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

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    console.log(id)
    if (!id) notFound

    const idToSearch = decodeURI(id)
    // API call to get the Searched Movies
    // API call to get the Popular Movies
    return (
        <div>You are filtering by the genre with ID {id} and name {genre}</div>
    )
}

export default GenrePage