import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>

        <div className='marquee h-52'>
            <div className='marquee md:gap-12 gap-5'>
                {logoIconsList.map((logo, i) => (
                  <div key={i} className='flex-center'>
                    <img
                      src={logo.imgPath}
                      alt={`company-logo-${i}`}
                      loading='lazy'
                      decoding='async'
                      width={160}
                      height={60}
                      className='object-contain'
                    />
                  </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default LogoSection
