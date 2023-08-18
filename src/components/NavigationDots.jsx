import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home','about','work','skills','testimonials','contact'].map((item, idx)=> (
          <a 
            key={item + idx}
            className='app__navigation-dot'
            href={`#${item}`}
            style={ active=== item ? { backgroundColor: '#313BAC'  } : {} }
          >
          </a>
        ))}
    </div>
  )
}

export default NavigationDots