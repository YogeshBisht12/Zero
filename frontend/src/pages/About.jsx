import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Background section */}
      <div
        className="relative my-10 flex flex-col md:flex-row gap-16 bg-cover bg-center text-white px-6 py-12 rounded-xl"
        style={{ backgroundImage: `url(${assets.about_img})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center gap-6 md:w-2/4">
          <p>
            Zero Clothing was founded with a vision to redefine fashion by
            blending style, comfort, and affordability. Our mission is to create
            clothing that empowers individuals to express themselves with
            confidence and ease. From everyday essentials to trendsetting
            designs, we bring fashion that fits every moment of your life.
          </p>
          <p>
            Since the beginning, Zero Clothing has been dedicated to offering
            high-quality apparel crafted with care and attention to detail.
            Whether it’s casual wear, workwear, or statement pieces, our
            collection is designed to suit every personality and preference. At
            Zero, we believe fashion should be accessible, sustainable, and
            timeless.
          </p>

          <b className="text-xl">Our Mission</b>
          <p>
            At Zero Clothing, our mission is to make fashion simple,
            sustainable, and accessible for everyone. We aim to design apparel
            that combines comfort, quality, and style—empowering people to look
            good, feel confident, and express themselves effortlessly.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 px-6">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every piece at Zero Clothing is crafted with care and checked for
            quality, ensuring you receive only the best in comfort and
            durability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shop anytime, anywhere — Zero Clothing makes fashion effortless with
            easy browsing, secure payments, and doorstep delivery.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team is always ready to assist you — ensuring quick responses,
            smooth returns, and a shopping experience you can trust.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default About
