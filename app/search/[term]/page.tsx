import MovieCarousel from '@/components/MovieCarousel';
import { getSearchedTerm } from '@/lib/data';
// import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    term: string
  }
};

async function SearchPage({ params: { term } }: Props) {
//   console.log(term);
//   if (!term) notFound;

  const termToSearch = decodeURI(term);

  // TODO: filter by search terms in the Petition
  const response = await getSearchedTerm(termToSearch);
  console.log('response', response);
  const movies = response ? response.movies : [];
  const series = response ? response.series : [];
  const results = [...movies, ...series];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10">
          Results for
          {termToSearch}
        </h1>
        <MovieCarousel title="Movies" movies={results} isVertical />
        <MovieCarousel title="You may also like" movies={movies} />
      </div>
    </div>
  );
}

export default SearchPage;
