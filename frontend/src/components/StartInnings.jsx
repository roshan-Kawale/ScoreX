import React from 'react'

const StartInnings = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto my-4 backdrop-blur-md rounded-lg shadow-lg">
        <div>
            <h1 className='font-semibold text-2xl my-5 ml-5'>Batting</h1>
            <div className='flex flex-col justify-evenly md:flex-row '>
            <div className='border-2 shadow-lg'>
               <img className='h-[300px] px-14' src="/assets/Striker.jpg" alt="striker" /> 
               <p className='flex justify-center items-center my-3 font-semibold'>Striker</p>
            </div>
            <div className='border-2 shadow-lg'>
                <img className='h-[250px] mt-12 px-2' src="/assets/nonStriker.png" alt="nonStriker" />
               <p className='flex justify-center items-center my-3 font-semibold'>Non-Striker</p>
            </div>
            </div>
        </div>
        <div>
            <h1 className='font-semibold text-2xl my-5 ml-5'>Bowling</h1>
            <div className='mx-auto border-2 shadow-lg md:w-1/3'>
                <img className='h-[250px] mt-6 px-2' src="/assets/bowler.png" alt="bowler" />
               <p className='flex justify-center items-center my-3 font-semibold'>Bowler</p>
            </div>
        </div>
    </div>
  )
}

export default StartInnings