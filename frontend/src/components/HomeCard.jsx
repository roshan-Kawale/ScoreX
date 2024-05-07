import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/match/get`); // Replace with your API endpoint
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setError(data.message);
          return;
        }
        setMatchData(data); // Assuming your API returns the match data
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMatchData();
  }, []);

  return (
    <>
      {matchData &&
        matchData.map((match) => (
          <div className="flex items-center justify-center py-1 bg-blueGray-50 mx-5 mt-10">
            <div className="relative flex p-5 w-full xl:w-8/12 flex-col rounded-xl bg-white bg-clip-border border-2 text-gray-700 shadow-md">
              <div className="gap-2">
                <div className="m-2 mb-8">
                  <h1 className="text-emerald-500 font-medium text-lg">
                    {match.name}
                  </h1>
                  <h2>{match?.matchType}</h2>
                  <div>
                    <span className="text-emerald-500">{match?.location?.ground}</span>
                    <span>, {match?.location?.city}</span>
                    <span>, 23-03-2024</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between m-2 my-4">
                  <h1 className="text-lg font-semibold">{match?.team1?.name}</h1>
                  <div className=" flex gap-2 ">
                    <span className="text-xl font-bold">102/2</span>
                    <span>(8.0 Ov)</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between m-2 my-4">
                  <h1 className="text-lg font-semibold">{match?.team2?.name}</h1>
                  <div className=" flex gap-2">
                    <span className="text-xl font-bold">100/5</span>
                    <span>(8.0 Ov)</span>
                  </div>
                </div>
                <div className="m-2 text-lg">
                  <h2>{match?.tossWinner?.name} won by 2 runs</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default HomeCard;
