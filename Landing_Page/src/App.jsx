import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import FirstPage from "./pages/FirstPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      {/* <Route path="/" element={<FirstPage/>} /> */}
    </Routes>
      
  )
}

export default App
