import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MatchDetails = () => {
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/match/get/${matchId}`); // Replace with your API endpoint
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setError(data.message);
          return;
        }
        setMatchData(data); // Assuming your API returns the match data
        setLoading(false);
        console.log(matchData)
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMatchData();
  }, [matchId]);

  const handleChange = (e) => {
    if (e.target.id === "city" || e.target.id === "ground") {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [e.target.id]: e.target.value,
        },
      });
      return;
    } else {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleClick = (e) => {
    if (
      e.target.id === "testMatch" ||
      e.target.id === "limitedOvers" ||
      e.target.id === "theHundred" ||
      e.target.id === "pairCricket" ||
      e.target.id === "boxCricket"
    ) {
      setFormData({
        ...formData,
        matchType: e.target.id,
      });
    }
    if (
      e.target.id === "tennis" ||
      e.target.id === "leather" ||
      e.target.id === "others"
    ) {
      setFormData({
        ...formData,
        ballType: e.target.id,
      });
    }
    if (
      e.target.id === "rough" ||
      e.target.id === "cement" ||
      e.target.id === "turf" ||
      e.target.id === "matting"
    ) {
      setFormData({
        ...formData,
        pitchType: e.target.id,
      });
    }
  };

  const requestBody = {
    ...formData,
    team1: matchData?.team1,
    team2: matchData?.team2
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/match/matchDetail/${matchId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate(`/makedecision/${matchData._id}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-2xl mx-auto mt-10 backdrop-blur-md bg-slate-200/30  rounded-lg shadow-lg">
      <div className="flex justify-between">
        <div className="border-2 border-blue-200 py-2 px-6 rounded-xl">
          {matchData?.team1?.name}
        </div>
        <div>VS</div>
        <div className="border-2 border-blue-200 py-2 px-6 rounded-xl">
          {matchData?.team2?.name}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-5 gap-2">
          <h1 className="font-semibold">Match Type</h1>
          <ul className="flex flex-row gap-2">
            <li
              id="limitedOvers"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.matchType === "limitedOvers"
                  ? "bg-blue-400"
                  : "bg-gray-200"
              } py-1 px-2 rounded-2xl`}
            >
              Limited Overs
            </li>
            <li
              id="testMatch"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.matchType === "testMatch"
                  ? "bg-blue-400"
                  : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Test Match
            </li>
            <li
              id="theHundred"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.matchType === "theHundred"
                  ? "bg-blue-400"
                  : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              The Hundred
            </li>
            <li
              id="pairCricket"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.matchType === "pairCricket"
                  ? "bg-blue-400"
                  : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Pair Cricket
            </li>
            <li
              id="boxCricket"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.matchType === "boxCricket"
                  ? "bg-blue-400"
                  : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Box Cricket
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="number"
              id="totalOver"
              onChange={handleChange}
              placeholder="No. of Overs*"
              className=" focus:outline-none border-b-2 border-gray-900 border-transparent hover:border-blue-400  w-2/6 p-2 rounded-lg"
              required
            />
            <input
              type="text"
              id="city"
              onChange={handleChange}
              placeholder="City*"
              className="focus:outline-none border-b-2 border-gray-800 border-transparent hover:border-blue-400  p-2 rounded-lg"
              required
            />
            <input
              type="text"
              id="ground"
              onChange={handleChange}
              placeholder="Ground*"
              className="focus:outline-none border-b-2 border-gray-800 border-transparent hover:border-blue-400 mt-2 p-2 rounded-lg"
              required
            />
          </div>

          <div className="flex gap-2">
            <input
              type="date"
              className="focus:outline-none border-b-2 w-3/6 border-gray-800 border-transparent hover:border-blue-400 mt-2 p-2 rounded-lg"
              id="date"
            />
            <input
              type="time"
              className="focus:outline-none border-b-2 w-2/6 border-gray-800 border-transparent hover:border-blue-400 mt-2 p-2 rounded-lg"
              id="time"
            />
          </div>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <h1 className="font-semibold">Ball Type</h1>
          <ul className="flex flex-row gap-2">
            <li
              id="tennis"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.ballType === "tennis" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Tennis
            </li>
            <li
              id="leather"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.ballType === "leather" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Leather
            </li>
            <li
              id="others"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.ballType === "others" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Others
            </li>
          </ul>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <h1 className="font-semibold">Pitch Type</h1>
          <ul className="flex flex-row gap-2">
            <li
              id="rough"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.pitchType === "rough" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Rough
            </li>
            <li
              id="cement"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.pitchType === "cement" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Cement
            </li>
            <li
              id="turf"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.pitchType === "turf" ? "bg-blue-400" : "bg-gray-200"
              }  py-1 px-2 rounded-2xl`}
            >
              Turf
            </li>
            <li
              id="matting"
              onClick={handleClick}
              className={`border border-1 cursor-pointer ${
                formData.pitchType === "matting" ? "bg-blue-400" : "bg-gray-200"
              } py-1 px-2 rounded-2xl`}
            >
              Matting
            </li>
          </ul>
        </div>

        <button className="bg-sky-800 w-full text-white p-3 mb-5 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Next
        </button>
      </form>
    </div>
  );
};

export default MatchDetails;
