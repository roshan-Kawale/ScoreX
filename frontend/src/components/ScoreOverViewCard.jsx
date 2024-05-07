import React from 'react'

const ScoreOverViewCard = () => {
  return (
    <div className="flex items-center justify-center py-1 bg-blueGray-50 mx-5 mt-10">
    <div className="relative flex p-5 w-full xl:w-8/12 flex-col rounded-xl bg-white bg-clip-border border-2 text-gray-700 shadow-md">
        <div className='gap-2'>
    <div className='m-2 mb-8'>
        <h1 className='text-emerald-500 font-medium text-lg'>GCOEC Premier League 2024</h1>
        <h2>(Final)</h2>
        <div><span className='text-emerald-500'>Government College</span><span>, Chandrapur</span><span>, 23-03-2024</span></div>
    </div>
    <div className='flex flex-row justify-between m-2 my-4'>
        <h1 className='text-lg font-semibold'>TEAM A</h1>
        <div className=' flex gap-2 '>
            <span className='text-xl font-bold'>102/2</span>
            <span>(8.0 Ov)</span>
        </div>
    </div>
    <div className='flex flex-row justify-between m-2 my-4'>
        <h1 className='text-lg font-semibold'>TEAM B</h1>
        <div className=' flex gap-2'>
            <span className='text-xl font-bold'>100/5</span>
            <span>(8.0 Ov)</span>
        </div>
    </div>
    <div className='m-2 text-lg'>
        <h2>TEAM A won by 2 runs</h2>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ScoreOverViewCard