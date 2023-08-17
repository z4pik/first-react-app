import React from 'react'
import MyImage from '../../images/Property 1=Default 1.png'; 
import { BenefitMenu } from '../benefit-menu';
import { Benefits } from './constants'



export const MainSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col mt-20 xl:flex-row">
      <div className="text-almost-white">
        <div>
          <p className="text-6xl text-center font-bold">
            <span className="block">Jump start your crypto</span>
            <span className="block">portfolio</span>
          </p>
          <p className="text-2xl text-center mt-20">
            RABBIT is the easiest place to buy and sell cryptocurrency.
          </p>
          <div className="flex justify-center mt-20">
            <img src={MyImage} alt="My Image" className="h-auto max-w-full" />
          </div>
        </div>
        <div className="mt-20">
          <BenefitMenu items={Benefits} />
        </div>
      </div>
    </section>
  );
};

