import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchTeam from "./SearchTeam";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTeam } from "../features/teams/teamSlice";

const CreateMatch = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const requestBody = {
    name: formData.name,
    team1: teams[0],
    team2: teams[1]
  };

  const handleRemoveTeam = (teamId) => {
    dispatch(removeTeam(teamId));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/match/create", {
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
      navigate(`/matchDetail/${data.match._id}`)
      // navigate(`/makeDecision/${data.match._id}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-40 backdrop-blur-md bg-slate-200/30  rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Match Name"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />
        <div>
          <SearchTeam />
        </div>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 mb-5 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Create Match"}
        </button>
      </form>
      {teams.length > 0 && (
        <div className="flex flex-col gap-4">
          {teams.map((team) => (
            <div
              key={team._id}
              className="border p-3 bg-white shadow-lg rounded-lg flex justify-between items-center border-transparent"
            >
              <Link to="/" className="flex-grow">
                {team.name} {/* Display player name */}
              </Link>
              <div
                onClick={() => handleRemoveTeam(team._id)}
                className="ml-2 text-red-500 text-xl cursor-pointer"
              >
                <MdClose />
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default CreateMatch;
