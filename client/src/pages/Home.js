import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/movies")
        .then((res) => setMovies(res.data))
        .catch((err) =>{
            console.log("error fetching data", err)
        });
    },[])

    return(
        <>
            <div>
                {
                    movies.map( (movie) => (
                        <div>
                            <Link to={`/movie/${movie._id}`} >
                                <h1> {movie.title} / {movie.year} </h1>
                                <p> {movie.description} </p>
                            </Link>
                        </div>
                    ) )
                }
            </div>
        </>
    )
}