import BottomCompo from "./components/BottomCompo"
import FooterCompo from "./components/FooterCompo"
import HeaderCompo from "./components/HeaderCompo"
import { MiddleCompo } from "./components/MiddleCompo"
import StateCompoProv from "./context/StateCompoProv"


const App = () => {
  
  return (

    <StateCompoProv> 


    <div>
    
    <h1 className="flex flex-col content-center items-center" >APP</h1>

    <HeaderCompo />

    <MiddleCompo />

    <BottomCompo />

    <FooterCompo />

    </div>


    </StateCompoProv>

  )
}

export default App
