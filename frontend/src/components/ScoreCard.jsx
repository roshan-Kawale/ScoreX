import React from 'react'

const ScoreCard = () => {
    const players = [
        {
          "name": "PLAYER 1",
          "status": "Out",
          "runs": 50,
          "balls": 30,
          "fours": 5,
          "sixes": 2,
          "strikeRate": 166.67
        },
        {
          "name": "Player 2",
          "status": "Not Out",
          "runs": 30,
          "balls": 20,
          "fours": 3,
          "sixes": 1,
          "strikeRate": 150
        },
        {
          "name": "Player 3",
          "status": "Not Out",
          "runs": 20,
          "balls": 15,
          "fours": 2,
          "sixes": 0,
          "strikeRate": 133.33
        }
      ]

    const bowlers = [
        {
          "name": "Bowler 1",
          "O": 4,
          "M": 1,
          "R": 20,
          "W": 1,
          "0s": 15,
          "4s": 2,
          "6s": 0,
          "WD": 1,
          "NB": 0
        },
        {
          "name": "Bowler 2",
          "O": 3,
          "M": 0,
          "R": 25,
          "W": 0,
          "0s": 10,
          "4s": 3,
          "6s": 1,
          "WD": 0,
          "NB": 1
        },
        {
          "name": "Bowler 3",
          "O": 4,
          "M": 0,
          "R": 30,
          "W": 2,
          "0s": 12,
          "4s": 1,
          "6s": 0,
          "WD": 2,
          "NB": 0
        }
      ]  
  return (
    <>
    <div className="py-1 bg-blueGray-50 mx-5 ">
    <div className="w-full xl:w-8/12 px-4 mx-auto border-2 shadow-md rounded-xl mt-5">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-1 max-w-ful flex flex-grow flex-1 justify-between">
              <h3 className="font-bold text-base text-blueGray-700">TEAM A</h3>
              <div className=' flex gap-2 '>
            <span className='text-xl font-bold'>102/2</span>
            <span>(8.0 Ov)</span>
        </div>
            </div>
        
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  Batters Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  Status
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  Runs
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  Balls
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  4s
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  6s
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                  Strike Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {players.map((player, index) => (
                <tr key={index}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold text-emerald-500 whitespace-nowrap p-4 text-left text-blueGray-700">
                    {player.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.runs}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.balls}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.fours}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.sixes}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    {player.strikeRate}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4 text-left text-blueGray-700">
                    Extras
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                    (nb 3, wd 4, b 4)
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-semibold whitespace-nowrap p-4">
                      11
                  </td>
              </tr>
            
                
            </tbody>
            
          </table>
          <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full ">
              <h3 className="text-base text-blueGray-700 text-wrap min-w-[40rem]"><span className='font-semibold'>Yet to Bat: </span><span>Pranay Kurwade, Rampure Mahesh, Bhupendra, Sankshep Sambhoj, Harsh Warbhe, Hasan, Pranav Gore, Shyam Avchar, Swayamjeet Bhagat, Anuj Gohane</span></h3>
            </div>
        
          </div>
        </div>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className=" text-base text-blueGray-700 text-wrap min-w-[40rem]"><span className='font-semibold'>Fall Of Wickets: </span><span>25-1 (Bharat Kadam, 2.3 ov), 76-2 (Gajanan Raje, 6.4 ov)</span></h3>
            </div>
        
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-1= bg-blueGray-50 mx-5">
      <div className="w-full xl:w-8/12 mb-10 px-4 mx-auto border-2 shadow-md rounded-xl">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
          

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Bowler
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    O
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    M
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    R
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    W
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    0s
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    4s
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    6s
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    WD
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    NB
                  </th>
                </tr>
              </thead>

              <tbody>
                {bowlers.map((bowler, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs font-bold text-emerald-500 whitespace-nowrap p-4 text-left text-blueGray-700">
                      {bowler.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.O}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.M}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.R}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.W}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler["0s"]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler["4s"]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler["6s"]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.WD}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {bowler.NB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ScoreCard