// teamModel.js

import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  players: [
    {
      playerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      isCaptain: {
        type: Boolean,
        default: false,
      },
      isWicketKeeper: {
        type: Boolean,
        default: false,
      },
    },
  ],
  matches: [
    {
      matchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
      },
      won: Boolean,
      opponentTeamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
      totalRuns: Number,
      totalWickets: Number,
      totalOverPlayed: Number,
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
