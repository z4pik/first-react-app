import React from 'react';
import PhoneImage from '../../images/iPhone 13 Download.png';
import AppStoreImageSrc from '../../images/App store.png';
import PlayMarketImageSrc from '../../images/Play store.png';

export const DownloadSection = () => {
  return (
    <div className='w-full flex flex-col items-center mt-40 justify-center'>
      <div className='w-full md:w-2/3 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex justify-center items-center'>
          <img src={PhoneImage} alt='Phone' className='w-2/3' />
        </div>
        <div className='md:w-1/2 flex flex-col justify-center items-start md:pl-10'>
          <div>
            <h1 className='text-white text-3xl font-bold mb-4'>Get the <span className='text-almost-green'>Rabbit</span> app.</h1>
            <p className='text-white text-xl mb-6 whitespace-pre-line'>{`Stay on top of the markets with the \nRabbit app for Android or iOS.`}</p>
          </div>
          <div className='flex mt-4'>
            <img src={AppStoreImageSrc} alt='App Store' className='w-1/2 h-auto mr-2' />
            <img src={PlayMarketImageSrc} alt='Play Store' className='w-1/2 h-auto ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
};
