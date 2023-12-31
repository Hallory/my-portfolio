import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Layout/Header";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";

const Nav = ({ isOpen }) => {
  
  return (
    <AnimatePresence >
      
      {isOpen && (
        <>
        <motion.div 
          initial = {{scaleY:0, opacity:0}}
          animate={{scaleY:1, opacity:1}}
          exit={{scaleY:1, opacity:1}}
          transition={{duration:1, ease:[0.22,1,0.36,1]}}
        />
    <motion.nav
      initial={{ y: 0, height: 0, zIndex: -1000 }}
      animate={{ y: 0, height: "100vh", zIndex: 1000 }}
        
      transition={{ duration: 0.75 }}
      className="h-screen w-screen fixed flex flex-col justify-center items-center bg-slate-300"
    >
      <div className="w-full h-full lg:pl-[150px] xs:pl-[50px] pt-[55px] pr-[80px] pb-[65px]">
        <div className="flex  items-center relative w-full h-[30px] mb-[40px] mt-[40px]">
          <motion.div
            initial={{ opacity: 0, x: 350, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              width: "250px",
              height: "3px",
              backgroundColor: "white",
              type: "spring",
            }}
            transition={{ delay: 1.5, duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -100, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              width: "200px",
            }}
            className="flex justify-center items-center gap-[20px] text-3xl"
          >
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
            <FaTelegramPlane />
          </motion.div>
        </div>
        <div className="flex w-full h-[60%] flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
            className="flex items-center justify-between max-w-[40%]"
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/">Home</Link>
            </motion.span>
            <p>Back to home page</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 1 }}
            className=" "
            
          >
            <motion.span className="nav-span">
              <Link to="/aboutme"
              className="text-with-outline">
                About Me
              </Link>
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 1 }}
            className=""
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/work">Work</Link>
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className=""
          >
            <motion.span className="nav-span">
              <Link className="text-with-outline" to="/work">Writing</Link>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.nav></>
      )}
    </AnimatePresence>
  );
};
export default Nav;
