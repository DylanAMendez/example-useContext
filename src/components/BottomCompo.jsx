
import { useContext } from "react"

import { counterContext } from "../context/counterContext"

const BottomCompo = () => {

  const { restar } = useContext(counterContext);

  return (
    <div className="flex flex-col content-center items-center my-10 py-5 border border-blue-300 ">

        <h1 className=" text-[#ff3] mb-5 ">BottomCompo</h1>

        <button onClick={ () => restar() } >restar</button>

    </div>
  )
}

export default BottomCompo