import React from "react";
import Layout from "../UI/Layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Anime1 from "../images/anime1.jpg";
import Anime2 from "../images/anime2.jpg";
import Anime3 from "../images/anime3.jpg";
import AnimatedImage from "./animated/AnimatedImage";

const Home = () => {
  
  return (
    <Layout>
      <div className="container page">
        <motion.div className="page-header">
          <motion.div className="h-[80vh] bg-slate-200">
          </motion.div>
          
          <motion.div className="min-h-[100vh] bg-slate-200 flex flex-col">
            <AnimatedImage/>
            </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
