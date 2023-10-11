import React,{useState} from 'react';
import Nav from '../navigation/Nav';
import {motion, useAnimate} from 'framer-motion';
const Header = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        
    }

    return (
        <header className=' w-full  fixed z-[10000] inline-block align-middle bg-transparent'>
            {isOpen && (
                <Nav isOpen={isOpen}/>
            )}
            <div className='relative z-[10000] align-middle flex  justify-between max-w-[200px]  lg:left-[10%] xs:left-[10px]'>
            <span className='flex relative flex-col cursor-pointer text-2xl ' onClick={toggle}>
                <motion.span
                initial={{opacity:0, y:-10}}     
                animate={isOpen ? {opacity:1, y:30} : {opacity:0, y:-20}}
                transition={{duration:0.1}}
                >Close</motion.span>
                
                <motion.span
                initial={{opacity:1, y:30}}
                animate={isOpen ? {opacity:0, y:5} : {opacity:1, y:-5}}
                transition={{duration:0.1}}

                >Menu</motion.span>
            </span>
            <div className='fixed lg:top-[65px] lg:right-[50px] xs:top-[30px] xs:right-[20px] w-[100px]'>
                Contact Me!
            </div>
            </div>
        </header>
    );
};

export default Header;
