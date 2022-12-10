import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus earum at ipsum, architecto nam incidunt culpa, corporis enim animi molestiae doloremque iure quis delectus aspernatur. Sequi vitae voluptatem cumque illo distinctio aspernatur debitis! Pariatur facilis veritatis placeat, ullam suscipit perspiciatis ipsum voluptatem! Ipsa sequi totam nemo ipsum voluptatem laboriosam?</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod suscipit dicta architecto reprehenderit impedit, provident, ducimus doloribus, magnam iusto minima autem accusamus. Id, sunt atque dolor, deleniti ipsam odio reprehenderit iusto aperiam, consectetur dolore nesciunt praesentium blanditiis iste quae exercitationem qui veritatis voluptates dolorum magni repudiandae soluta beatae officia voluptatem!</p>
        </div>
    </div>
  )
}

export default About