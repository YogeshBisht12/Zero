import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Background image with content overlay */}
      <div
        className="relative my-10 mb-28 flex flex-col md:flex-row justify-center items-center gap-10 bg-cover bg-center text-white px-6 py-16"
        style={{ backgroundImage: `url(${assets.contact_img})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content sits above background */}
        <div className="relative z-10 flex flex-col justify-center items-start gap-6 max-w-[480px]">
          <p className="font-semibold text-xl">Our Store</p>
          <p>24/B Model Town <br /> Delhi 84, India</p>
          <p>Tel: (415) 555-0132 <br />Email: admin@zero.com</p>
          <p className="font-semibold text-xl">Careers at Zero</p>
          <p>Learn more about our teams and job openings</p>
          <button className="cursor-pointer border border-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default Contact
