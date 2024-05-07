import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchPlayer from "./SearchPlayer";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer, removePlayer } from "../features/players/playersSlice";

const CreateTeam = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const players = useSelector((state) => state.players.players);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleRemovePlayer = (playerId) => {
    dispatch(removePlayer(playerId));
  };

  const requestBody = {
    name: formData.name,
    players: players.map(player => ({
      playerId: player._id,
      isCaptain: player.isCaptain,
      isWicketKeeper: player.isWicketkeeper ,
    }))
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/teams/create", {
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
      navigate("/");
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
          placeholder="Team Name"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />
        <div>
        <SearchPlayer/>
        </div>
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 mb-5 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Create Team"}
        </button>
      </form>

      {players.length > 0 && (
        <div className="flex flex-col gap-4">
          {players.map((player) => (
            <div
              key={player._id}
              className="border p-3 bg-white shadow-lg rounded-lg flex justify-between items-center border-transparent"
            >
              <Link to="/" className="flex-grow">
                {player.username} {/* Display player name */}
              </Link>
              <div
                onClick={() => handleRemovePlayer(player._id)}
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

export default CreateTeam;
