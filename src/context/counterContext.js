
// creamos el CONTEXTO
import { createContext } from "react";

// aca hemos creado nuestro contexto
export const counterContext = createContext();


// este archivo es el CONTEXTO
// todo lo que este dentro de este CONTEXTO ( lo que enviemos a traves de el ) : va a estar disponible para TODOS los componentes

// Esto se podría hacer en el 'StateCompoProv.jsx'
// pero lo hice aquí para hacer el paso a paso