import ScrollDownBtn from "../components/ScrollDownBtn"
import "./pages.css"

function FirstPage() {
  return (
    <div className="first-page-container">
      <nav>
        <div className="left-side-nav">
          <p>What we believe</p>
          <p>Our features</p>
        </div>
        <div className="right-side-nav">
          <p>Our story</p>
          <p>The waitlist</p>
        </div>
      </nav>
      <div className="logo">
        <img src="/logo.svg" alt="logo"/>
      </div>
      <ScrollDownBtn/>
    </div>
  )
}

export default FirstPage