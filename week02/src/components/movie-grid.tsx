import type { Movie } from "../types/movie";
import { MovieCard } from "./movie-card";

interface MovieGridProps {
  movies: Movie[];
  bookmarkedMovieIds: number[];
  onBookmarkToggle: (movieId: number) => void;
}

export function MovieGrid({ movies, bookmarkedMovieIds, onBookmarkToggle }: MovieGridProps) {
  return (
    <section className="grid grid-cols-5 gap-x-4 gap-y-[25px] max-[900px]:grid-cols-3 max-sm:grid-cols-2 max-[420px]:grid-cols-1" aria-label="영화 목록">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isBookmarked={bookmarkedMovieIds.includes(movie.id)}
          onBookmarkToggle={onBookmarkToggle}
        />
      ))}
    </section>
  );
}
