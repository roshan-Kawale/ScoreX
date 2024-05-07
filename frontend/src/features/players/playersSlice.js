import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: [],
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer(state, action) {
      state.players.push(action.payload);
    },
    removePlayer(state, action) {
      state.players = state.players.filter(player => player._id !== action.payload);
    },
  },
});

export const { addPlayer, removePlayer } = playersSlice.actions;
export default playersSlice.reducer;