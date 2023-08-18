import React from 'react'
import { BsTwitter, BsLinkedin }  from 'react-icons/bs'
import { FaFacebookF }  from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a className='' href='https://www.linkedin.com/in/yaw-agyemang-04a00a1a2/' target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default SocialMedia