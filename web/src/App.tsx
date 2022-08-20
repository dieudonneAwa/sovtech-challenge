import React from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes, Navigate } from "react-router-dom";

import PeoplePage from "./views/PeoplePage";
import PersonPage from "./views/PersonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/people" />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:name" element={<PersonPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
