import BottomCompo from "./BottomCompo"
import FooterCompo from "./FooterCompo"
import HeaderCompo from "./HeaderCompo"
import { MiddleCompo } from "./MiddleCompo"

import { themeContext } from "../context/themeContext"
import { useContext } from "react"


const MainCompo = () => {

    const { theme, cambiarTheme } = useContext(themeContext);

    const className = 'panel-all-' + theme;

  return (

    <div>

        <section className={className}>

        
        <div className="bg-green-400 flex flex-col content-center items-center ">
        <h1 className=" ">MainCompo</h1>
        <button onClick={ () => cambiarTheme()  } className=""  > cambiar fondo </button>
        </div>

        <HeaderCompo />
        <MiddleCompo />
        <BottomCompo />
        <FooterCompo />

        </section>

    </div>
  )
}

export default MainCompo