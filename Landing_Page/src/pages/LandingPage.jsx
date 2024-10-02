import QuestionsComp from "../components/QuestionsComp"
import ButtonComponent from "../components/ButtonComponent"
import "./landing-page.css"

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="feature-heading">
        <p className="detail-text">Our Features</p>
        <h1>Fluid AI was born out of a desire to simplify and streamline modern life</h1>
      </div>


      <div className="features">

        <div className="feature feature-1">
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced AI
              technology with a user-friendly interface, it brings together to-do lists, chats,
              saved items, and bucket lists into one seamless platform..</p>
          </div>
          <div className="img-container">
            <img src="/iPhone_1.png" alt="Feature Image 1" />
          </div>
        </div>

        <div className="feature feature-2">
          <div className="img-container">
            <img src="/iPhone_2.png" alt="Feature Image 2" />
          </div>
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced AI
              technology with a user-friendly interface, it brings together to-do lists, chats,
              saved items, and bucket lists into one seamless platform..</p>
          </div>

        </div>

        <div className="feature feature-1">
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced AI
              technology with a user-friendly interface, it brings together to-do lists, chats,
              saved items, and bucket lists into one seamless platform..</p>
          </div>
          <div className="img-container">
            <img src="/iPhone_3.png" alt="Feature Image 3" />
          </div>
        </div>

        <div className="feature feature-2">
          <div className="img-container">
            <img src="/iPhone_4.png" alt="Feature Image 4" />
          </div>
          <div className="details">
            <h3>Fluid AI: Simplify, Organize, and Achieve More</h3>
            <p className="detail-text"> In a world where daily tasks, communication, and goals often become
              overwhelming, Fluid AI offers an innovative solution. Combining advanced AI
              technology with a user-friendly interface, it brings together to-do lists, chats,
              saved items, and bucket lists into one seamless platform..</p>
          </div>

        </div>
      </div>

      <div className="question-section">
        <div className="left-side">
          <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
          <p className="detail-text"> Research shows that experiencing curiosity and
            awe can immensely benefit our mental, physical, and professional health.
            Here’s a brief overview of what curiosity and awe can do for you</p>
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
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Country" />
          </form>

          <ButtonComponent text="Join Waitlist" />
        </div>
        <img src="/mask.png" />
      </div>

      <div className="footer">
        <div className="left-side-footer">

        </div>
        <div className="right-side-footer">
          
        </div>
      </div>
    </div>
  )
}

export default LandingPage