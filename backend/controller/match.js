import Match from "../models/match.js";
import Team from "../models/team.js";


export const createMatch = async (req, res) => {
  try {
    const { name, team1, team2} = req.body;
    // Check if teams exist
    const team1Id = await Team.findById(team1);
    const team2Id = await Team.findById(team2);
    if(!team2Id) {
        return res.status(400).json({ success: false, message: 'Team2 not selected' });  
    }
    if (!team1Id || !team2Id) {
      return res.status(400).json({ success: false, message: 'One or more teams not found.' });
    }
    if(team1._id === team2._id) {
      return res.status(400).json({ success: false, message: 'Match not create by selecting same team in both side' });
    }

     // Generate a random number to determine the toss winner
     const tossResult = Math.random(); // Random number between 0 and 1

     // Determine the toss winner based on the random result
     let tossWinnerId , tossLoserId;
     if (tossResult < 0.5) {
       tossWinnerId = team1Id; // Team 1 wins the toss
       tossLoserId = team2Id;
     } else {
       tossWinnerId = team2Id; // Team 2 wins the toss
       tossLoserId = team1Id;
     }

    // Create the new match
    const newMatch = new Match({
      name,
      team1,
      team2,
      tossWinner: tossWinnerId,
      tossLoser: tossLoserId
    });

    // Save the match to the database
    await newMatch.save();

    res.status(201).json({ success: true, message: 'Match created successfully.', match: newMatch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to create match.', error: error.message });
  }
};

export const makeDecision = async (req, res) => {
  try {
    const { matchId } = req.params;
    const { battingTeam, bowlingTeam} = req.body;

    // Find the match by ID
    const match = await Match.findById(matchId);
    if (!match) {
      return res.status(404).json({ success: false, message: 'Match not found.' });
    }

    // Update the batting and bowling team IDs
    match.battingTeam = battingTeam;
    match.bowlingTeam = bowlingTeam;

    // Save the updated match to the database
    await match.save();

    res.status(200).json({ success: true, message: 'Match updated successfully.', match });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update match.', error: error.message });
  }
};


export const getMatchById = async (req, res) => {
  const { matchId } = req.params;

  try {
    const match = await Match.findById(matchId).populate(
      "tossWinner tossLoser team1 team2"
    );
    if (!match) {
      return res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json(match);
    console.log(match);
  } catch (error) {
    next(error);
  }
};

export const getMatch = async (req, res) => {
  try {
    const match = await Match.find().populate(
      "tossWinner tossLoser team1 team2"
    );
    if (!match) {
      return res.status(404).json({ message: "Match not found." });
    }

    res.status(200).json(match);
    console.log(match);
  } catch (error) {
    next(error);
  }
};

export const updateMatch = async (req, res) => {
  try {
    const {matchId} = req.params;
    const { name, team1, team2, matchType, location, totalOver, matchStart, ballType, pitchType } = req.body;

    // Check if the match exists
    const existingMatch = await Match.findById(matchId);
    if (!existingMatch) {
      return res.status(404).json({ success: false, message: 'Match not found.' });
    }
    
    // Check if teams exist
    const team1Id = await Team.findById(team1);
    const team2Id = await Team.findById(team2);
    if (!team1Id || !team2Id) {
      return res.status(400).json({ success: false, message: 'One or more teams not found.' });
    }
    if (team1Id._id === team2Id._id) {
      return res.status(400).json({ success: false, message: 'Cannot create a match with the same team on both sides.' });
    }

    // Update match details
    existingMatch.name = name || existingMatch.name;
    existingMatch.team1 = team1Id || existingMatch.team1;
    existingMatch.team2 = team2Id || existingMatch.team2;
    existingMatch.matchType = matchType || existingMatch.matchType;
    existingMatch.location = location || existingMatch.location;
    existingMatch.totalOver = totalOver || existingMatch.totalOver;
    existingMatch.matchStart = matchStart || existingMatch.matchStart;
    existingMatch.ballType = ballType || existingMatch.ballType;
    existingMatch.pitchType = pitchType || existingMatch.pitchType;

    // Save the updated match to the database
    await existingMatch.save();

    res.status(200).json({ success: true, message: 'Match updated successfully.', match: existingMatch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update match.', error: error.message });
  }
};

