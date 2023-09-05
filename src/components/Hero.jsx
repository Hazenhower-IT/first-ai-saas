import React from 'react'
import {logo} from "../assets/index"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>

        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="fast_summary_logo" className='w-28 object-contain' />
        </nav>

        <h1 className='head_text'>
            Summarize articles with the power of <br  className='max-md:hidden'/>
            <span className='blue_gradient'>Fast </span><span className='orange_gradient'>Summary</span>
        </h1>

        <h2 className='desc'>
            Simplify your job with Fast Summary, our powerfull AI-powered article summarizer 
        </h2>

    </header>
  )
}

export default Hero