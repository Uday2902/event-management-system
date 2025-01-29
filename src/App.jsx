import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import themeConfig from "./theme/themeConfig";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import OrganizerDashboard from "./components/organizer-dashboard/OrganizerDashboard";
import OrganizerEventCard from "./components/cards/OrganizerEventCard";
import NewEventForm from "./components/forms/NewEventForm";
import ParticipantsTable from "./components/tables/ParticipantsTable";
import OrganizerParticipantsList from "./components/organizer-dashboard/OrganizerParticipantsList";
import BasicPopover from "./components/BasicPopover";
import LoginPage from './components/pages/LoginPage';
import PersonalInfoPopover from './components/PersonalInfoPopover';
import SignupPage from "./components/pages/SignupPage";
// import LoginPage from "./pages/LoginPage"


function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
      <ThemeProvider theme={themeConfig(mode)}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route
              path="/organizer-dashboard"
              element={<OrganizerDashboard />}
            />
            <Route path="/cards" element={<OrganizerEventCard />} />
            <Route path="/form" element={<NewEventForm />} />
            <Route path="/table" element={<ParticipantsTable />} />
            <Route path="/all" element={<OrganizerParticipantsList />} />
            <Route path="/tooltip" element={<BasicPopover />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pop" element={<PersonalInfoPopover />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
