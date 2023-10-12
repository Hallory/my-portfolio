import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");

    // Если пользователь уже посещал сайт, не показывать анимацию загрузки
    if (visitedBefore) {
      setIsLoading(false);
    } else {
      localStorage.setItem("visitedBefore", "true"); // Пометить, что пользователь посетил сайт
      // Симулируем задержку загрузки
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Задайте необходимую задержку
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen bg-black"
    >
      {/* Здесь вы можете добавить креативные анимированные элементы */}
      {isLoading && (
        <div className="spinner">
          {/* Вставьте анимацию загрузки (например, крутящийся спиннер) */}
        </div>
      )}
    </motion.div>
  );
};

export default Preloader;