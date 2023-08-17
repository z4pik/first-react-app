import React from 'react';
import PhoneImage from '../../images/iPhone 13 Mockup.png';
import { Button } from '../button'

import { ReactComponent as LoginIcon } from '../../images/log-in.svg'
import { ReactComponent as PortfolioIcon } from '../../images/grid.svg'
import { ReactComponent as TradeIcon } from '../../images/repeat.svg'

const HowItWorks = () => {
  return (
    <div className='w-full flex flex-col items-center mt-10 justify-center'>
      <div className='text-white text-center mb-20'>
        <p className='text-4xl font-bold'>How It Works</p>
      </div>
      <div className='w-full flex'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className='flex flex-col'>
            <LoginIcon className="ml-1 mb-4" />
            <PortfolioIcon className="ml-1 mb-4" />
            <TradeIcon className="ml-1 mb-4" />
          </div>
          <div className='pl-10 '>
            <div>
              <h1 className='text-white text-3xl font-bold mb-4'>Trading</h1>
              <p className='text-white text-xl mb-6'>Buy, sell and swap digital assets 24/7.</p>
            </div>
            <div className="mt-4">
              <Button isGreen={true}> Get Started </Button>
            </div>
          </div>
        </div>

        <div className='w-1/2 flex justify-end'>
          <img src={PhoneImage} alt='Your Image' className='object-cover' />
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
