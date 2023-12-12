
// este componente es el PROVEEDOR de CONTEXTO

import { useState } from "react"

import { counterContext } from "./counterContext"



const StateCompoProv = ( { children } ) => {

    const [counter, setCounter] = useState(0);

    const sumar = () =>
    {
        setCounter ( (prev) => prev + 1  );
    };

    const restar = () => 
    {
        setCounter ( (prev) => prev - 1 );
    };

    const reset = () =>
    {
        setCounter (0);
    };


  return (

    <counterContext.Provider value={ { counter, sumar, restar, reset } } >

        { children }

    </counterContext.Provider>

  )
}

export default StateCompoProv