import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTeam } from "../features/teams/teamSlice";

const SearchTeam = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`/api/teams/search/${searchTerm}`); // Update the API endpoint
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      setSelectedTeam(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleAddTeam = () => {
    console.log(teams.length)
    if (teams.length > 1) {
      setError("only two teams selected for match")
    } else {
        dispatch(addTeam(selectedTeam));
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg flex items-center  border-transparent">
        <input
          type="text"
          placeholder="Search Team..."
          className="focus:outline-none w-full p-3 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleClick}>
          <FaSearch className="text-slate-600 mr-3" />
        </button>
      </div>
      {selectedTeam && (
        <div className="bg-white shadow-lg rounded-lg flex justify-between items-center border-transparent p-3 mt-5">
          <h1>{selectedTeam.name}</h1>
          <div className="text-xl cursor-pointer" onClick={handleAddTeam}>
            <MdAddTask />
          </div>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </>
  );
};

export default SearchTeam;
