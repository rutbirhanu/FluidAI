// import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import FirstPage from "./pages/FirstPage"
import { useState } from "react";

function App() {

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true); 
  };

  return (
    <div className="app">
      {!isAnimating && <FirstPage onAnimate={handleAnimate} isAnimating={isAnimating} />} {/* Only show the first page if the second page has not appeared */}
      {isAnimating && <LandingPage isAnimating={isAnimating} />}
    </div>
  )
}

export default App
