/* eslint-disable react/prop-types */
import ScrollDownBtn from "../components/ScrollDownBtn"
import { motion } from 'framer-motion';
import "./pages.css"
// import { useState } from "react";

function FirstPage({ onAnimate, isAnimating }) {

  return (

    <motion.div 
      className="first-page-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 0 : 1 }} 
      transition={{ duration: 1 }}
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
        animate={{ scale: isAnimating ? 0.5 : 1, y: isAnimating ? -100 : 0 }} // Shrink and move up when animating
        transition={{ duration: 1 }}
      >
        <img src="/logo.svg" alt="logo" />
      </motion.div>
      <ScrollDownBtn onclick={onAnimate} />
    </motion.div>
  )
}

export default FirstPage