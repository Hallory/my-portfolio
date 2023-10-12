import React from "react";
import Layout from "../UI/Layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Anime1 from "../images/anime1.jpg";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Измените пороговое значение по вашим предпочтениям
    triggerOnce: false,
  });

  return (
    <Layout>
      <div className="container page">
        <motion.div className="page-header">
          <motion.div className="h-[80vh] bg-slate-500"></motion.div>
          <motion.div className="min-h-[100vh] bg-slate-900 flex flex-col">
            <motion.div ref={ref} className="h-[20vh] flex align-bottom w-full bg-slate-300">
              {inView && (
                <motion.img
                initial={{  opacity: 0, height: 0, y: "20vh", width: "30%" }} // Начальное положение: высота (scaleY) - 0, прозрачность (opacity) - 0
                animate={{ opacity: 1, height: "100%", y: 0, width: "30%" }} // Законченное положение: высота - 1, полная прозрачность
                transition={{ duration: 1 }}
                src={Anime1}
                className="max-h-[100%] object-cover"
                alt="Anime"
              />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
