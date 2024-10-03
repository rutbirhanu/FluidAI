/* eslint-disable react/prop-types */
import ScrollDownBtn from "../components/ScrollDownBtn"
import { motion } from 'framer-motion';
import "./pages.css"
import "./landing-page.css"
import ButtonComponent from "../components/ButtonComponent"


function FirstPage({ onAnimate, isAnimating }) {
  return (

    <motion.div
      className="first-page-container"
      initial={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      style={{
        backgroundImage: 'url("/mesh1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: isAnimating ? 1 : 2
      }}
    >
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
      <motion.div
        className="logo"
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: isAnimating ? 0.3 : 1, y: isAnimating ? -20 : 0 }} // Shrink and move up when animating
        transition={{ duration: 2 }}
      >
        <img src="/logo.svg" alt="logo" />
      </motion.div>

      <motion.div
        initial={{ opacity: 1, display: "block" }}  // Hidden initially
        animate={{ opacity: isAnimating ? 0 : 1, display: isAnimating ? "none" : "block" }}  // Show and fade in on animation trigger
      >
        <ScrollDownBtn onclick={onAnimate} />
      </motion.div>


      <motion.div className="cards-container"

        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: isAnimating ? 1 : 0, display: isAnimating ? "block" : "none", y:-50 }}
        transition={{ duration: 5, ease: "easeInOut" }}

      >
        <div className="second-page-center">

          <motion.h1
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 3 }}
            style={{ zIndex: 1, fontSize: 48 }}
          >
            Unlock Seamless <br /> Efficiency
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 3 }}
          >
            <ButtonComponent text="Join Waitlist" />
          </motion.div>

        </div>

        <motion.div className="circular-images">
          <motion.img className="circle-image" src="/To Do.png" alt="Mini Image 1" width="150px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Event.png" alt="Mini Image 2" width="200px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }}
          />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 3" width="100px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 4" width="100px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Reservation.png" alt="Mini Image 5" width="190px"
            initial={{ x: '100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Card.png" alt="Mini Image 6" width="200px"
            initial={{ x: '-100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 7" width="100px"
            initial={{ x: '-100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Event.png" alt="Mini Image 8" width="200px"
            initial={{ x: '-100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/Tab.png" alt="Mini Image 9" width="100px"
            initial={{ x: '-100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
          <motion.img className="circle-image" src="/tickets_card.png" alt="Mini Image 10" width="260px"
            initial={{ x: '-100vw' }} // off-screen to the left
            animate={{ x: 0 }}
            transition={{ delay: 2, duration: 6 }} />
        </motion.div>

      </motion.div>


    </motion.div>


  )
}

export default FirstPage