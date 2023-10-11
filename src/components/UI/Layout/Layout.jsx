import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from '../navigation/Nav';
import {motion} from 'framer-motion';
const Layout = ({children}) => {
    return (
        <div >
            <Header/>
            
                <motion.main 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                
                transition={{delay: 0.75, duration: 1 }}
            >
                <motion.div
                initial={{translateY: 0, opacity: 0}}
                animate={{translateY: 100, opacity: 1}}
                transition={{duration: 1}}
                className='bg-amber-400'
                />

                
                {children}
            </motion.main>
            
            
            <Footer/>
        </div>
    );
};

export default Layout;