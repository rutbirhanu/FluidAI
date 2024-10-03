import "./components.css"

function ImageOverlay() {
  return (
    <div className="overlay-parent-container">
      <div className="image-overlay-container">
        <p style={{ width: "200px" }}>Fluid has Internet access, so you can get up-to-date information from it.</p>
        <h1 style={{ fontSize: "30px" }}>Time for work</h1>
      </div>
      <img src="/arrow.png" height="45px"/>
    </div>
  )
}

export default ImageOverlay