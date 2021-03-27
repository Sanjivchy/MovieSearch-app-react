import React from 'react'

export default function SearchMovies() {
    return (
       <form className="form" onSubmit="">
           <label className="label" htmlFor="query">Movie Name</label>
           <input className= "input" type="text" name="query" placeholder="i.e. Jurassic Park"/>
            <button className="button">Search</button>
       </form>
    )
}
