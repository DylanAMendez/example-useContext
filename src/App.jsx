import BottomCompo from "./components/BottomCompo"
import FooterCompo from "./components/FooterCompo"
import HeaderCompo from "./components/HeaderCompo"
import { MiddleCompo } from "./components/MiddleCompo"
import StateCompoProv from "./context/StateCompoProv"
import ThemeCompoProv from "./context/ThemeCompoProv"


const App = () => {
  
  return (

    <ThemeCompoProv>

    <StateCompoProv> 


    <div className="">
    
    <h1 className="flex flex-col content-center items-center" >APP</h1>

    <HeaderCompo />

    <MiddleCompo />

    <BottomCompo />

    <FooterCompo />

    </div>


    </StateCompoProv>

    </ThemeCompoProv>

  )
}

export default App
