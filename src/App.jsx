
import MainCompo from "./components/MainCompo"

import StateCompoProv from "./context/StateCompoProv"
import ThemeCompoProv from "./context/ThemeCompoProv"


const App = () => {
  
  return (

    <ThemeCompoProv>

    <StateCompoProv> 


    <div>
    
    <h1 className="flex flex-col content-center items-center" >APP</h1>

    <MainCompo />

    </div>


    </StateCompoProv>

    </ThemeCompoProv>

  )
}

export default App
