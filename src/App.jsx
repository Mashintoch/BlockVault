import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Index from "@/pages/index";
import CryptoCurrencyPage from "@/pages/CryptoCurrencyPage";
import Waitlist from "@/pages/waitlist";
import Error404 from "@/pages/Error404";
import { AnalyticsProvider } from '../AppContext/analyticsContext';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-MJH9Y831L4";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cryptocurrency" element={<CryptoCurrencyPage />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnalyticsProvider>
    </BrowserRouter>
  );
}

export default App;
