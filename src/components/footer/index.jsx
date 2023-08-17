import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo-gray.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaFigma, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="p-4 mt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <LogoIcon className="mr-2 cursor-pointer" />
        </div>
        <div className="flex gap-4">
          <FaFacebook className="text-medium-gray text-xl cursor-pointer" />
          <FaTwitter className="text-medium-gray text-xl cursor-pointer" />
          <FaInstagram className="text-medium-gray text-xl cursor-pointer" />
          <FaLinkedin className="text-medium-gray text-xl cursor-pointer" />
          <FaFigma className="text-medium-gray text-xl cursor-pointer" />
          <FaYoutube className="text-medium-gray text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-medium-gray mb-2">Invest</h2>
          <p className="text-medium-gray mb-2">Cryptocurrencies</p>
          <p className="text-medium-gray mb-2">Crypto Indices</p>
          <p className="text-medium-gray mb-2">Metals</p>
          <p className="text-medium-gray mb-2">Stocks</p>
          <p className="text-medium-gray">Commodities</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-medium-gray mb-2">Earn</h2>
          <p className="text-medium-gray mb-2">Cash Plus</p>
          <p className="text-medium-gray mb-2">Staking</p>
          <p className="text-medium-gray">Affiliate Program</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-medium-gray mb-2">Products</h2>
          <p className="text-medium-gray mb-2">Card</p>
          <p className="text-medium-gray mb-2">App</p>
          <p className="text-medium-gray">Rabbit Custody</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-medium-gray mb-2">Features</h2>
          <p className="text-medium-gray mb-2">Club</p>
          <p className="text-medium-gray mb-2">Payments</p>
          <p className="text-medium-gray mb-2">Saving Plans</p>
          <p className="text-medium-gray mb-2">Swap</p>
          <p className="text-medium-gray">Security</p>
        </div>
      </div>
    </div>
  );
}
