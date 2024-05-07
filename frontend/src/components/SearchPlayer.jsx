import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { addPlayer } from "../features/players/playersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchPlayer = ({ onPlayerSelect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isCaptain, setIsCaptain] = useState(false);
  const [isWicketkeeper, setIsWicketkeeper] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.players);


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/user/${searchTerm}`); // Update the API endpoint
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      setSelectedPlayer(data);
      // Handle the logic for the successful search result, e.g., redirect to the user's profile page
      //   navigate(`/user/${searchTerm}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleAddPlayer = () => {
    if (!players.find((player) => player._id === selectedPlayer._id)) {
      dispatch(addPlayer({ ...selectedPlayer, isCaptain, isWicketkeeper }));
    } else {
      // Handle case where player is already selected
      setError("Player is already selected.");
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg flex items-center  border-transparent">
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none w-full p-3 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleClick}>
          <FaSearch className="text-slate-600 mr-3" />
        </button>
      </div>
      {selectedPlayer && (
        <div className="bg-white shadow-lg rounded-lg flex justify-between items-center border-transparent p-3 mt-5">
          <h1>{selectedPlayer.username}</h1>
          <div className="flex items-center mt-3">
            <label className="mr-3">
              <input
                type="checkbox"
                checked={isCaptain}
                onChange={(e) => setIsCaptain(e.target.checked)}
              />
              Captain
            </label>
            <label>
              <input
                type="checkbox"
                checked={isWicketkeeper}
                onChange={(e) => setIsWicketkeeper(e.target.checked)}
              />
              Wicketkeeper
            </label>
          </div>
          <div className="text-xl cursor-pointer" onClick={handleAddPlayer}>
            <MdAddTask />
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </>
  );
};

export default SearchPlayer;
