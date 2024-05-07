import mongoose from "mongoose";

// Define the match schema
const matchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  team1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team", // Reference to the Team model
    required: true,
  },
  team2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team", // Reference to the Team model
    required: true,
  },
  matchType: {
    type: String,
  },
  location: {
    city: {
      type: String,
    },
    ground: {
      type: String,
    },
  },
  totalOver: {
    type: Number,
  },
  matchStart: {
    type: Date,
  },
  ballType: {
    type: String,
  },
  pitchType: {
    type: String,
  },
  tossWinner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  tossLoser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  battingTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  bowlingTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  matchWinner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  matchLoser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Match model
const Match = mongoose.model("Match", matchSchema);

export default Match;
