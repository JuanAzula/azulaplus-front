import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        term: string
    }
}

function SearchPage({ params: { term } }: Props) {
    console.log(term)
    if (!term) notFound

    const termToSearch = decodeURI(term)
    // API call to get the Searched Movies
    // API call to get the Popular Movies
    return (
        <div>You are searching for {term}</div>
    )
}

export default SearchPage