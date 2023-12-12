
import { useContext } from "react";

import { counterContext } from "../context/counterContext";

const FooterCompo = () => {

  const {counter, reset} = useContext(counterContext);

  return (
    <div>
        <div className="flex flex-col content-center items-center my-10 py-5 border border-red-300">

        <h1 className=" text-red-500 " > FooterCompo </h1>

        <h3> {counter} </h3>

        <button onClick={ ()=> reset() } >RESET</button>

        </div>
    </div>
  )
}

export default FooterCompo