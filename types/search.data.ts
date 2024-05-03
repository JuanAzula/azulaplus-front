import { Movie } from "./movie.data";

export type SearchResults = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};