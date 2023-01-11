import React,{useState} from 'react'
import { Movie } from './Movie';
export const Appp = () => {

    const [movies,setMovies]=useState([]);
    const [Loading,setloading]=useState(false);

   async function FetchMovieHandler() {
    setloading(true);
        const response= await fetch('https://swapi.dev/api/films/');
        const data=await response.json();

            const transformmovie=data.results.map(moviedata=>{
                return {
                    id:moviedata.eposide_id,
                    title:moviedata.title,
                    opentext:moviedata.opening_crawl

                }
            })
            setMovies(data.results);
            setloading(false);
    
    }
    // console.log(movies)
  return (
    <>
<div>
    <button onClick={FetchMovieHandler}>FetchData</button>
    {!Loading &&  movies.length> 0 &&<Movie movie={movies} />}
    {!Loading && movies.length===0 && <p>Movie not found</p>}
    {Loading && <p>Loading....</p>}
</div>
    
    </>
  )
}
