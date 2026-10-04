import type { Movie } from "../types/movie";
import { MovieCard } from "./movie-card";

interface MovieGridProps {
  movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
  return (
    <section className="grid grid-cols-1 gap-x-4 gap-y-[25px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" aria-label="영화 목록">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
