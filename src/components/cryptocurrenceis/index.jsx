import React from 'react';
import AcalaNetworkIcon from '../../images/AcalaNetwork.svg';
import AchainIcon from '../../images/Achain.svg';
import AdcoinIcon from '../../images/Adcoin.svg';
import AidosKuneenIcon from '../../images/AidosKuneen.svg';
import AkropolisIcon from '../../images/Akropolis.svg';

const items = [
  {
    id: 1,
    img: AcalaNetworkIcon,
  },
  {
    id: 2,
    img: AchainIcon,
  },
  {
    id: 3,
    img: AdcoinIcon,
  },
  {
    id: 4,
    img: AidosKuneenIcon,
  },
  {
    id: 5,
    img: AkropolisIcon,
  },
];

export const CryproCurrenceis = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-40'>
      <div className='text-white text-center mb-20'>
        <p className='text-4xl font-bold'>Cryptocurrencies that work with <span className='text-almost-green'>Rabbit</span></p>
      </div>
      <div className='flex'>
        {items.map(item => (
          <div key={item.id} className='mx-2'>
            <img src={item.img} alt={`Crypto Icon ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryproCurrenceis;
