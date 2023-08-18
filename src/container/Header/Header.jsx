import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants= {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      {/* intro text */}
      <motion.div
        whileInView={{ x:[-100, 0], opacity: [0,1] }} //fully invisible to visible
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Yaw</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Frontend Developer</p>
            {/* <p className='p-text'>Freelancer</p> */}
          </div>
        </div>
      </motion.div>

      {/* profile img */}
      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className='app__header-img'
      >
        <img src={images.profile2} alt='profile_bg' style={{rotate:"-8deg", scale:"0.9"}} />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>

      {/* Known technologies circles */}
      <motion.div
        variants={scaleVariants}
        whileInView={ scaleVariants.whileInView }
        className='app__header-circles'
      >
        {[images.react, images.redux, images.sass].map((circle, idx)=>(
          <div className='circle-cmp app__flex' key={`circle-${idx}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')