import React from 'react'
import about from '../../assets/about.jpg'
const About = () => {
  return (
    <>

        <section className= 'py-24 reltive shadow-lg shadow-slate-600'>
            <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto '>
                <div className='w-full justify-start items-center gap-8 grid '>
                    <div className='w-full  justify-start lg:items-start items-center gap-10 inline-flex'>
                        <div className='w-full flex-col justify-start lg:items-start items-center gap-4 flex'>
                            <h1 className='text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center'>About Us</h1>
                            <h2 className='text-gray-900 font-bold text-2xl font-manrope leading-normal lg:text-start text-center '>Your Trusted Car Rental Partner</h2>
                                <p className='text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center'>We are dedicated to providing top-quality car rental services
                                    tailored to your needs. Whether you're planning a road trip, a business journey, or simply need a ride for the day,
                                    our wide range 
                                    of well-maintained vehicles ensures you travel in comfort and style.

                                        Driven by a commitment to excellence, we prioritize customer satisfaction with transparent pricing, easy booking, and
                                        round-the-clock support. 
                                        Let us be part of your journey, wherever the road takes you!
                            </p>
                        </div>
                        <img src={about} className='rounded-lg shadow-lg shadow-slate-600'/>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default About
