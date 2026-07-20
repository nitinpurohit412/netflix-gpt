import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContaier from "./SecondaryContaier";

const Browse = () => {
    useNowPlayingMovies();

  return (
    <div className="">
      <Header/>
      <MainContainer/>
      <SecondaryContaier/>

    </div>
  )
}

export default Browse
