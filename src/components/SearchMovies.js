import React, {useState} from "react";
import MovieCard from './MovieCard';

export default function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=93bdff21bc780c3887d38fc5858c9b6a&language=en-US&query=${query}&page=1&include_adult=true`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
            console.log(data)
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" disabled={!query} type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />

                ))}
            </div>    
        </>
    )
}