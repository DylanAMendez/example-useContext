
import { useContext } from "react"

import { counterContext } from "../context/counterContext"

export const MiddleCompo = () => {

  const { counter, sumar } = useContext(counterContext);

  return (
    <div className="flex flex-col content-center items-center my-10 py-5 border border-blue-300 ">

        <h1 className=" text-[#ff3] ">MiddleCompo</h1>

        <h3> {counter} </h3>
        <button onClick={ () => sumar() } >sumar</button>

    </div>
  )
}
