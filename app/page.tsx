import BannerWrapper from "@/components/BannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { Button } from "@/components/ui/button";
import { getMovies, getSeries } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const movies = await getMovies();
  const series = await getSeries();
  return (
    <main className="">
      <BannerWrapper movies={movies} />
      <div className="flex flex-col space-y-2 4xl:-mt-48 ">
        <MovieCarousel movies={movies} title="Upcoming" />
        <MovieCarousel movies={movies} title="Trending Movies" />
        <MovieCarousel movies={series} title="Most watched Series" />
      </div>
    </main>
  );
}
