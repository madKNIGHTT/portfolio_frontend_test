import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message }= formData;

  const handleChangeInput= e=> {
    const { name, value }= e.target;

    // take note of this expression - destructure & dynamically set
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit= ()=> {
    setLoading(true);

    const contact= {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    // upload content to sanity
    client.create(contact)
      .then(()=> {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href="mailto:yagyemang1@gmail.com" className='p-text'>yagyemang1@gmail</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href="tel: +233 55 555 5555" className='p-text'>+1 380 218 8734</a>
        </div>
      </div>

      { !isFormSubmitted 
        ? <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className='app__flex'>
              <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
            </div>

            <div>
              <textarea
                id=""
                cols="30"
                rows="6"
                className='p-text'
                placeholder='Your Message'
                name= 'message'
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>
        : <div>
            <h3 className='head-text'>Thank you for getting in touch</h3>
          </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')