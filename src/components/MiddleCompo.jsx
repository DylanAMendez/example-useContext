
import { useContext } from "react"

import { counterContext } from "../context/counterContext"

import { themeContext } from "../context/themeContext";

export const MiddleCompo = () => {

  const { theme, cambiarTheme } = useContext(themeContext);

  const { counter, sumar } = useContext(counterContext);

  const className = 'panel-' + theme;

  return (

  <section className={className}>

      <div className="flex flex-col content-center items-center my-10 py-5 border border-blue-300 ">

          <h1 className=" text-[#ff3] ">MiddleCompo</h1>

          <h3> {counter} </h3>
          <button onClick={ () => sumar() } >sumar</button>

          <h2 className="mt-5">Theme</h2>

          <button onClick={ () => cambiarTheme()  } className=" border border-orange-300 my-2 p-2 " >Cambiar Theme</button>

      </div>

    </section>
  )
}
