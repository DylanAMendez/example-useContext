
import { useState } from "react";

import { themeContext } from "./themeContext";




const ThemeCompoProv = ( { children } ) => {

    const [theme, setTheme] = useState('light');

    const cambiarTheme = () => 
    {
        setTheme( (prevTheme) => prevTheme === 'light' ? 'dark' : 'light' );
    }


  return (

    <themeContext.Provider value={ {theme, cambiarTheme} }>

        { children }

    </themeContext.Provider>

  )

}

export default ThemeCompoProv