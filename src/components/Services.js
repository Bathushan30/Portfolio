import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";



const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Web Development</p>
                        <p className='services-desc'>I create responsive, interactive, and visually appealing websites using modern web technologies.</p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>UI Design</p>
                        <p className='services-desc'>I create visually appealing, user-centric, and accessible designs that drive engagement and business success.</p>
                    </div>
                    <div className="services-card">
                        <BiCodeAlt  className='services-icon' />
                        <p className='services-title'>Front end development</p>
                        <p className='services-desc'>I craft engaging and intuitive user interfaces, ensuring seamless navigation and responsiveness across all devices.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
