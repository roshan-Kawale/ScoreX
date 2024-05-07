import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playersSlice';
import teamReducer from '../features/teams/teamSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    teams: teamReducer,
  },
});