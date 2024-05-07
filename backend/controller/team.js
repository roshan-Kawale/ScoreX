import Team from "../models/team.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import { errorHandler } from "../utils/error.js";

export const createTeam = async (req, res, next) => {
  const { name, players } = req.body;
  const admin = req.user.id;

  try {
    // Check if the team name is unique
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res
        .status(409)
        .json({ success: false, message: "Team name already exists." });
    }

    // Create a new team with admin and name
    const newTeam = new Team({
      name,
      admin,
      players: [{ playerId: admin }],
    });

    // Add players to the team if provided in the request
    if (players && players.length > 0) {
      // Check if players exist and are unique (optional)
      const playerIds = players.map((player) => player.playerId);
      const existingPlayers = await User.find({ _id: { $in: playerIds } });
      console.log(existingPlayers.length);
      console.log(players.length);
      if (existingPlayers.length !== players.length) {
        return res
          .status(404)
          .json({ message: "One or more players not found." });
      }

      // Add players to the team
      newTeam.players = newTeam.players.concat(players);
    }
    // Save the team to the database
    await newTeam.save();

    res.status(201).json({ message: "Team created successfully." });
  } catch (error) {
    next(error);
  }
};

export const updateTeam = async (req, res) => {
  const { teamId } = req.params;
  const { newName, playersToAdd } = req.body;

  try {
    // Check if the team exists
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found." });
    }

    // Check if the authenticated user is the team's admin
    if (team.admin.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to perform this action." });
    }

    // Update team name if a new name is provided
    if (newName) {
      team.name = newName;
    }

    // Check and add players to the team
    if (playersToAdd && playersToAdd.length > 0) {
      for (const playerId of playersToAdd) {
        const user = await User.findById(playerId);
        if (!user) {
          return res
            .status(404)
            .json({ message: `User with ID ${playerId} not found.` });
        }
        // Add the user/player to the team if not already in the team
        if (!team.players.includes(playerId)) {
          team.players.push(playerId);
        }
      }
    }

    // Save the updated team
    await team.save();

    res.status(200).json({ message: "Team updated successfully." });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getTeam = async (req, res) => {
  const { teamId } = req.params;

  try {
    // Populate the players' details when fetching the team
    const team = await Team.findById(teamId).populate(
      "players",
      "username email"
    );

    if (!team) {
      return res.status(404).json({ message: "Team not found." });
    }

    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

export const searchTeam = async (req, res, next) => {
  try {
    const { name } = req.params;
    const team = await Team.findOne({ name });
    if (!team) return next(errorHandler(404, "Team not found!"));
    res.status(200).json(team);
  } catch (error) {
    next(error);
  }
};

export const deleteTeam = async (req, res) => {
  const { teamId } = req.params;

  try {
    // Check if the team exists
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found." });
    }

    // Check if the authenticated user is the team's admin
    if (team.admin.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to perform this action." });
    }

    // Delete the team
    await team.remove();

    res.status(200).json({ message: "Team deleted successfully." });
  } catch (error) {
    next(error);
  }
};
