import QuestionsComp from "../components/QuestionsComp"
import ButtonComponent from "../components/ButtonComponent"
import "./landing-page.css"

function LandingPage() {
  return (
    <div className="landing-page-container">
      <p className="detail-text">Our Features</p>
      <h1>Fluid AI was born out of a desire to simplify and streamline modern life</h1>

      <div className="features">
        <div className="feature">
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text" > In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced
              AI technology with a user-friendly interface, it brings together to-do
              lists, chats, saved items, and bucket lists into one seamless platform</p>
          </div>
          <img src="/iPhone_1.png" />

        </div>

        <div className="feature">
          <img src="/iPhone_2.png" />

          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced
              AI technology with a user-friendly interface, it brings together to-do
              lists, chats, saved items, and bucket lists into one seamless platform</p>
          </div>

        </div>

        <div className="feature">
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced
              AI technology with a user-friendly interface, it brings together to-do
              lists, chats, saved items, and bucket lists into one seamless platform</p>
          </div>
          <img src="/iPhone_3.png" />
        </div>

      </div>

      <div className="question-section">
        <div className="left-side">
          <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
          <p className="detail-text"> In a world where daily tasks, communication, and goals often become
            overwhelming, Fluid AI offers an innovative solution. Combining advanced
            AI technology with a user-friendly interface, it brings together to-do
            lists, chats, saved items, and bucket lists into one seamless platform</p>
        </div>
        <div className="questions">
          <QuestionsComp question="Does Fluid AI increase wellbeing and meaning in life?" />
          <QuestionsComp question="What can curiosity, wonder, and awe do for you?" />
          <QuestionsComp question="Does Fluid AI increase wellbeing and meaning in life?" />
          <QuestionsComp question="What can curiosity, wonder, and awe do for you?" />
          <QuestionsComp question="Does Fluid AI increase wellbeing and meaning in life?" />
          <QuestionsComp question="What can curiosity, wonder, and awe do for you?" />
          <QuestionsComp question="Does Fluid AI increase wellbeing and meaning in life?" />
          <QuestionsComp question="What can curiosity, wonder, and awe do for you?" />
        </div>
      </div>

      <div className="waitlist-container">
        <div className="waitlist-form">
          <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
          <form>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
          </form>
          <ButtonComponent text="Join Waitlist"/>
        </div>
        <img src="/mask.png" />
      </div>
    </div>
  )
}

export default LandingPage