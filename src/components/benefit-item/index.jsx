import React from 'react';

export const BenefitItem = ({ text = '', icon, desc = '' }) => {
  return (
    <div className='text-center mx-auto max-w-[360px]'>
      <div className='mb-4 flex justify-center items-center'>{icon}</div>
      <p className='mb-2 whitespace-normal font-bold text-2xl'>{text}</p>
      <p className='whitespace-normal'>{desc}</p>
    </div>
  );
};
