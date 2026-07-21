import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContaier = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-36 relative z-20 pl-6">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
    )
  );
};

export default SecondaryContaier;
