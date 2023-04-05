import React from 'react'

const Componente = ({ titulo, children }) => {
    return ( 
        <div >
            <h1>{titulo}</h1>
            <div>{children}</div>
        </div>
     );
}
 
export default Componente;