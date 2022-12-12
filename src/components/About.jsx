import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>I'm a newly graduated Web Developer from DevMountain with substantial knowledge of JavaScript, HTML, CSS, React, and Tailwind. I have a background in mechanical engineering, accounting, and computer science. </p>
            <br />
            <p className='text-xl'>On days when I'm not busy you can find me longboarding, grabbing good food with my partner, or playing video games with friends. I love coffee, pizza, and good whiskey so if you have any recommendations then send me a message</p>
        </div>
    </div>
  )
}

export default About