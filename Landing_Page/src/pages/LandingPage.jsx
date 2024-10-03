/* eslint-disable react/prop-types */
import QuestionsComp from "../components/QuestionsComp"
import ButtonComponent from "../components/ButtonComponent"
import "./landing-page.css"
import ImageOverlay from "../components/ImageOverlay"
import { motion } from 'framer-motion';

function LandingPage({ isAnimating }) {


  return (
    <div className="landing-page-container">

      <motion.div className="cards-container"
        //  initial={{ y: '100vh', opacity: 0 }}  // Start off-screen
        //  animate={showSecondPage ? { y: 0, opacity: 1 } : { y: '100vh', opacity: 0 }}  // Animate up when triggered
        //   transition={{ type: 'spring', stiffness: 50, duration: 1 }}

        initial={{ y: '100vh', opacity: 0 }} // Start from below the viewport
        animate={{
          y: isAnimating ? 0 : '100vh', // Move up when animation is triggered
          opacity: isAnimating ? 1 : 0,
        }}

        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="second-page-center">
          <motion.div
            className="logo"
            initial={{ scale: 0.5, y: -100 }} // Start scaled down as it transitions from the first page
            animate={{ scale: 0.5, y: 0 }} // Maintain the small size but move into place
            transition={{ duration: 1 }}
          >
            <img src="/logo.svg" alt="logo" />
          </motion.div>
          {/* <img src="/logo.svg" /> */}
          <h1>Unlock Seamless <br /> Efficiency</h1>
          <ButtonComponent text="Join Waitlist" />
        </div>


        <motion.div className="circular-images">
          <motion.img className="circle-image" src="/To Do.png" alt="Mini Image 1" width="150px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.4 }} />
          <motion.img className="circle-image" src="/Event.png" alt="Mini Image 2" width="200px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.4 }} 
          />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 3" width="100px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.4 }} />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 4" width="100px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.4 }} />
          <motion.img className="circle-image" src="/Reservation.png" alt="Mini Image 5" width="190px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.4 }} />
          <motion.img className="circle-image" src="/Card.png" alt="Mini Image 6" width="200px"
           initial={{ x: '-100vw' }} // off-screen to the left
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 1.4 }}/>
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 7" width="100px"
           initial={{ x: '-100vw' }} // off-screen to the left
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 1.4 }}/>
          <motion.img className="circle-image" src="/Event.png" alt="Mini Image 8" width="200px"
           initial={{ x: '-100vw' }} // off-screen to the left
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 1.4 }}/>
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 9" width="100px"
           initial={{ x: '-100vw' }} // off-screen to the left
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 1.4 }}/>
          <motion.img className="circle-image" src="/tickets_card.png" alt="Mini Image 10" width="260px"
           initial={{ x: '-100vw' }} // off-screen to the left
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 1.4 }}/>
        </motion.div>

      </motion.div>

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
      <h1 style={{ width: "60vw", padding: "2.5em 0 0 30px" }}>Fluid AI was born out of a desire to simplify and streamline modern life</h1>
      <div className="feature-images-container">
        <ImageOverlay />
      </div>

      <div className="question-section">
        <div className="left-side">
          <h1>What can curiosity, wonder, and awe do for you?</h1>
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
            <select id="options" className="dropdown">
              <option value="search">
                United Arab Emirate</option>
              <option value="settings">United Arab Emirate</option>
              <option value="documents">United Arab Emirate</option>
              <option value="help">United Arab Emirate</option>
            </select>
          </form>

          <ButtonComponent text="Join Waitlist" />
        </div>
        <img src="/mask.png" />
      </div>

      <div className="footer">
        <div className="left-side-footer">
          <img src="/logo.svg" height="23px" />
          <p className="detail-text">2024 Fluid AI</p>
        </div>

        <div className="right-side-footer">
          <div className="footer-column">
            <ul>
              <li><a href="/help-center" className="detail-text">Our Features</a></li>
              <li><a href="/contact-us" className="detail-text">Areas</a></li>
              <li><a href="/shipping-info" className="detail-text">FAQs</a></li>
              <li><a href="/returns" className="detail-text">The Waitlist</a></li>
              <li><a href="/returns" className="detail-text">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li><a href="/about-us" className="detail-text">Terms of Service</a></li>
              <li><a href="/careers" className="detail-text">Privacy Policy</a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage