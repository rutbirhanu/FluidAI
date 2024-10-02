/* eslint-disable react/prop-types */
import "./components.css"

function ScrollDownBtn({onclick}) {
    return (
        <div className="scroll-icon-container" onClick={onclick}>
            <div className="scroll-icon">
                <span className="wheel"></span>
            </div>
            <p>Scroll Down</p>
        </div>

    )
}

export default ScrollDownBtn