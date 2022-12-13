import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>I'm a newly graduated Web Developer from <a href="https://devmountain.com/">DevMountain</a> with substantial knowledge of JavaScript, HTML, CSS, React, and Tailwind. I have a background in mechanical engineering, accounting, and computer science. </p>
            <br />
            <p className='text-xl'>On days when I'm not busy you can find me longboarding, grabbing good food with my <a href="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/315317835_662111888758258_1303936752777742541_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=Hy5fAOBN9c8AX_Yx8fZ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTU1MTgxNTQxMTEzOTY1Ng%3D%3D.2-ccb7-5&oh=00_AfChZs4JgZCju6IfBL1YcFEm5XYxyFGdPrH1L1s_aqwE6A&oe=639D509A&_nc_sid=30a2ef">partner</a>, or playing video games with <a href="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/274347351_2232574443550183_1244633975488994214_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=15L2QBqoOC8AX-kM5eE&tn=_3bsexlh7L4ZDp8M&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc3ODA0MDY4MTU4MTM2OTE2Mw%3D%3D.2-ccb7-5&oh=00_AfDQCE49d5mQcunnm4NnCja8IHnH4cYRDq80aOLIKotrNg&oe=639D4C05&_nc_sid=30a2ef">friends</a>. I love coffee, pizza, and good <a href="https://www.blantonsbourbon.com/">whiskey</a> so if you have any recommendations then send me a message!</p>
        </div>
    </div>
  )
}

export default About