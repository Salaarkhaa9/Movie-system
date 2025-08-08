import { useState } from "react"
import MovieCard from "../components/MovieCard"
function Home(){
    const [searchQuery, setsearchQuery]=useState("")
    const movies=[
        {id:1, title: "John Wick", release_date:"2020"},
        {id:2, title: "Final Destination", release_date:"2021"},
        {id:3, title: "Joker", release_date:"2024"}
    ]
    const handleSearch=()=>{}
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setsearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>(movie.title.toLowerCase().startsWith(searchQuery)&&
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}
export default Home