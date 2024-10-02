/* eslint-disable react/prop-types */
import "./components.css"

function QuestionsComp({ question }) {
    return (
        <>
            <div className="question-container">
                <p>{question}</p>
                <p>+</p>
            </div>
            {/* <hr/> */}
        </>
    )
}

export default QuestionsComp