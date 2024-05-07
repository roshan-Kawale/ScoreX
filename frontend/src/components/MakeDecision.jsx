import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaBaseballBall } from "react-icons/fa";
import { TbCricket } from "react-icons/tb";

const MakeDecision = () => {
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData , setFormData] = useState({});
  const [error, setError] = useState(null);
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
          setError(null);  
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchMatchData();
  }, [matchId]);

  const handleChange = (e) => {
    if (e.target.id === "bat" || e.target.id === "bowl") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }
}

const handleDecision = async () => {
    try {
      // Determine batting and bowling teams based on user's selection
      let battingTeam, bowlingTeam;
      if (formData.type === "bat") {
        battingTeam = matchData.tossWinner._id;
        bowlingTeam = matchData.tossLoser._id;
      } else if (formData.type === "bowl") {
        battingTeam = matchData.tossLoser._id;
        bowlingTeam = matchData.tossWinner._id;
      }

      // Update the match with the batting and bowling team IDs
      const res = await fetch(`/api/match/decision/${matchId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ battingTeam: battingTeam, bowlingTeam: bowlingTeam }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/startInning");
      // Redirect or perform any other action based on the response
    } catch (error) {
        setLoading(false);
        setError(error.message);
    }
  };


  return (
    <>
      <div className="p-3 max-w-lg mx-auto mt-40 backdrop-blur-md bg-slate-200/30  rounded-lg shadow-lg">
        <h1 className="text-xl cursor-pointer">Toss win by {matchData?.tossWinner?.name}</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
       {matchData && <div className="bg-white shadow-lg rounded-lg flex justify-between items-center border-transparent p-3 mt-5">
          <h1 className="text-xl cursor-pointer">{matchData?.tossWinner?.name}</h1>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="bat" className="w-5 "  onChange={handleChange}  checked={formData.type === "bat"} />
              <TbCricket className="text-xl" />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="bowl" className="w-5"  onChange={handleChange}  checked={formData.type === "bowl"}/>
              <FaBaseballBall className="text-xl" />
            </div>
          
          </div>
          <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          onClick={handleDecision}
        >
          {loading ? "Loading..." : "Start Match"}
        </button>
        </div>}
      </div>
    </>
  );
};

export default MakeDecision;
