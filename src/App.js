import React from 'react';
import Componente from './components/componente';
import { MoviesGrid } from './components/moviesGrid';
import styles from "./App.module.css"

function App() {
  return (
    <div className='contenedor'>
        <header>
            <h1 className={styles.title}>Movies</h1>
        </header>
        <main>
           <MoviesGrid />
        </main>
    
    </div>
      
  );
}

export default App;