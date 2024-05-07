import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam(state, action) {
      state.teams.push(action.payload);
    },
    removeTeam(state, action) {
      state.teams = state.teams.filter(team => team._id !== action.payload);
    },
  },
});

export const { addTeam, removeTeam } = teamsSlice.actions;
export default teamsSlice.reducer;