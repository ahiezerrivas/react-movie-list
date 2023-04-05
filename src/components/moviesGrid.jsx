import movies from "../movies.json"
import { MovieCard } from "./movieCard"
import styles from "../MovieGrid.module.css"

export function MoviesGrid() {
    return(
        <ul className={styles.MoviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
    </ul>
    )
}