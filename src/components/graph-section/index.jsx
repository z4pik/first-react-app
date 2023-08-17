import React from 'react';
import MinusIcon from '../../images/minus-circle.svg';
import PlusIcon from '../../images/plus-circle.svg';
import BTCGraph from '../../images/Btc-graph.png';
import ETHGrap from '../../images/Main Chart 2.png'
import { Button } from '../button';

export const GraphSection = () => {
  return (
    <div className='w-full flex flex-col items-center mt-40'>
      <div className='text-white text-center mb-20'>
        <p className='text-4xl font-bold'>Keep track of your favorite assets</p>
      </div>
      <div className="flex w-full justify-center gap-4">
        <div className="w-300">
          <div className="bg-middle-gray rounded-lg shadow-md p-4 h-full">
            <div className="flex justify-between">
              <p className="text-left whitespace-pre-line text-white">{`Bitcoin \n BTC`}</p>
              <div className="ml-3 flex flex-col text-right">
                <p className="text-right text-white">$29,959.50</p>
                <div className="flex items-center">
                  <img src={MinusIcon} alt="My Image" className="mr-2" />
                  <p className="text-medium-red">%-0.61</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="w-full h-300">
                <img src={BTCGraph} alt="Image" className="object-contain h-full w-full" />
              </div>
            </div>
            <div className='text-center mt-2'>
              <Button isGreen={true}>Buy</Button>
            </div>
          </div>
        </div>
        <div className="w-300">
          <div className="bg-middle-gray rounded-lg shadow-md p-4 h-full">
            <div className="flex justify-between">
              <p className="text-left whitespace-pre-line text-white">{`The Graph \n GRT`}</p>
              <div className="ml-3 flex flex-col text-right">
                <p className="text-right text-white">$0,120991</p>
                <div className="flex items-center">
                  <img src={PlusIcon} alt="My Image" className="mr-2" />
                  <p className="text-almost-green">%+4,12</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="w-full h-300">
                <img src={ETHGrap} alt="Image" className="object-contain h-full w-full" />
              </div>
            </div>
            <div className='text-center mt-2'>
              <Button isGreen={true}>Buy</Button>
            </div>
          </div>
        </div>
        <div className="w-300">
          <div className="bg-middle-gray rounded-lg shadow-md p-4 h-full">
            <div className="flex justify-between">
              <p className="text-left whitespace-pre-line text-white">{`Ethereum \n ETH`}</p>
              <div className="ml-3 flex flex-col text-right">
                <p className="text-right text-white">$1.898,81</p>
                <div className="flex items-center">
                  <img src={MinusIcon} alt="My Image" className="mr-2" />
                  <p className="text-medium-red">%1,64</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="w-full h-300">
                <img src={BTCGraph} alt="Image" className="object-contain h-full w-full" />
              </div>
            </div>
            <div className='text-center mt-2'>
              <Button isGreen={true}>Buy</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
