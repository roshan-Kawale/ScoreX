import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import CreateTeamPage from "./pages/CreateTeamPage";
import SigninPage from "./pages/SigninPage";
import CreateMatchPage from "./pages/CreateMatchPage";
import MakeDecisionPage from "./pages/MakeDecisionPage";
import ScoreViewPage from "./pages/ScoreViewPage";
import MatchDetails from "./components/MatchDetails";
import StartInnings from "./components/StartInnings";

function App() {
  
  return (
   <Router>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/sign-up" element={<SignupPage/>} />
    <Route path="/sign-in" element={<SigninPage/>} />
    <Route path="/createTeam" element={<CreateTeamPage/>} />
    <Route path="/createMatch" element={<CreateMatchPage/>} />
    <Route path="/makedecision/:matchId" element={<MakeDecisionPage/>} />
    <Route path="/matchDetail/:matchId" element={<MatchDetails/>} />
    <Route path="/scoreview" element={<ScoreViewPage/>} />
    <Route path="/startInning" element={<StartInnings/>} />
    </Routes>
   </Router>
  )
}

export default App
