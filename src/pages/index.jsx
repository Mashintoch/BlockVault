import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import CryptocurrencySection from '@/components/sections/CryptocurrencySection';
import HeroSection from '@/components/sections/HeroSection';
import BuyAndTradeSection from '@/components/sections/BuyAndTradeSection';
import PartnerSection from '@/components/sections/PartnerSection';
import TradingToolsSection from '@/components/sections/TradingToolsSection';
import SecuritySection from '@/components/sections/SecuritySection';
import StepSection from '@/components/sections/StepSection';
import FaqSection from '@/components/sections/FaqSection';
import BackToTopSection from '@/components/sections/BackToTopSection';
import { useLogEvent } from '../../AppContext/analyticsContext';

const Index = () => {
  const logEvent = useLogEvent();

  useEffect(() => {
    logEvent('User', 'Visited Home Page');
  }, [logEvent]);

  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <TradingToolsSection />
      <SecuritySection />
      <StepSection />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}

export default Index;
