import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

import faq from '@/images/illustrations/faq.png';
import { Fade } from 'react-reveal';

const FaqItem = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    'transition-all duration-300': true,
    'rotate-180': isOpen
  });

  const contentClass = classNames({
    'text-gray transition-all duration-300 overflow-hidden': true,
    'h-full': isOpen,
    'h-0': !isOpen
  });

  return (
    <div className='mb-3 border-b border-lightgray pb-3' >
      <div className='flex justify-between py-3 cursor-pointer hover:text-primary' onClick={() => setIsOpen(!isOpen)}>
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function FaqSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={faq} alt="FAQ" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
              <FaqItem open={true} title="Why should I choose BlockVault?">
                We are solving the problem of trading automation and insights aggregation on the Blockchain. We offer first, an  inter-chain exchange assistance and an advanced Market automation solutions using machine learning.
              </FaqItem>
              <FaqItem open={false} title="How does your Bot work?">
                We offer diverse trading assistance through telegram bots and in-service secured and trusted bot and AI assistance integration. All for for your systems. Contact us today to get started.
              </FaqItem>
              <FaqItem open={false} title="How do i trade my Coin?">
                We have various ways to trade your Coin with others, first through a telegram bot and also through quick WhatsApp P2P services.
              </FaqItem>
              <FaqItem open={false} title="Can I trade p2p on BlockValut?">
                We are providing an in-platform p2p services soon, for now, you can trade your coins with our advanced telegram bot or in-person transactions through WhatsApp.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
