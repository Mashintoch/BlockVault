import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import banks from '@/images/illustrations/banks.png';
import { Fade } from 'react-reveal';

export default function SecuritySection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <div>
          <Fade up>
            <img src={banks} alt="" />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              We Offer the best AI/ML trading assistants
            </h2>
            <ul className="my-6">
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Trading Bots
                </span>
                <p className="text-gray">
                  Automate your trading and dont miss on any trade with our advanced trading bots. Drive insights and automate alarms on your favourite platfroms
                </p>
              </li>
              <li className='mb-6'>
                <span>
                  <BsCheckCircleFill className='text-primary inline mr-2' />
                  Crypto & Stock trading ML Models
                </span>
                <p className="text-gray">
                  With our Sophisticated Machine learning models, we offer range of trading forcasts and insights
                </p>
              </li>
              <SecondaryButton>
                  <a href="mailto:chibuezedeveloper@gmail.com">Contact Us</a>
              </SecondaryButton>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
