import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "@/pages/index";
import CryptoCurrencyPage from "@/pages/CryptoCurrencyPage";
import Waitlist from "@/pages/waitlist";
import Error404 from "@/pages/Error404";
import { AnalyticsProvider } from '../AppContext/analyticsContext';

function App() {
  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="cryptocurrency" element={<CryptoCurrencyPage />} />
          <Route path="waitlist" element={<Waitlist />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnalyticsProvider>
    </BrowserRouter>
  );
}

export default App;
