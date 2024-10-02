/* eslint-disable react/prop-types */
import "./components.css"

function ButtonComponent({text}) {
  return (
      <div className="button-container">
          <button>{text}</button>
    </div>
  )
}

export default ButtonComponent