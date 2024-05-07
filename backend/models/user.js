import mongoose from "mongoose";
// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String, // You might store the avatar URL or use a different approach based on your needs
  },
  playingRole: String,
  battingStyle: String,
  bowlingStyle: String,
  teams: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
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
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
      batting: {
        status: String,
        runs: Number,
        balls: Number,
        fours: Number,
        sixes: Number,
        strikeRate: Number,
      },
      bowling: {
        overs: Number,
        maidens: Number,
        runs: Number,
        wickets: Number,
        zeros: Number,
        fours: Number,
        sixes: Number,
        wideBalls: Number,
        noBalls: Number,
      },
      matchPlayed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  batting: {
    totalRuns: Number,
    totalInnings: Number,
    highestRuns: Number,
    thirties: Number,
    fifties: Number,
    centuries: Number,
    fours: Number,
    sixes: Number,
    ducks: Number,
  },
  bowling: {
    innings: Number,
    overs: Number,
    maidens: Number,
    wickets: Number,
    threeWickets: Number,
    fiveWickets: Number,
    wides: Number,
    noBalls: Number,
    dotBalls: Number,
    fours: Number,
    sixes: Number,
  },
  wonMatches: {
    type: Number,
    default: 0,
  },
  lossMatches: {
    type: Number,
    default: 0,
  },
  createdTeams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  createdMatches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a User model based on the schema
const User = mongoose.model("User", userSchema);

export default User;
