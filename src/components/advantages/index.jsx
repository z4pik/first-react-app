import React from 'react'
import { ReactComponent as Check } from '../../images/check-circle.svg'
import MyImage from '../../images/App pre image.png'; 



export const Advantages = () => {
  return (
    <section className="w-full flex ml-10 justify-center items-center flex-col mt-20 xl:flex-row">
        <div className='w-2/4'>
            <div>
                <p className="text-4xl text-white text-left font-bold mb-10">
                    <span className="block">All your investments.</span>
                    <span className="block">All on <span className='text-almost-green'>Rabbit</span>.</span>
                </p>
            </div>
            <div>
                <div className='flex items-center mb-5'>
                    <Check />
                    <p className='text-white ml-2 whitespace-pre-line'>
                    Buy, sell & swap the cryptocurrencies you want {"\n"} anytime, anywhere.
                    </p>
                </div>
                <div className='flex items-center mb-5'>
                    <Check />
                    <p className='text-white ml-2 whitespace-pre-line'>
                    Fortify your portfolio with commodities and shield it {"\n"} against inflation
                    </p>
                </div>
                <div className='flex items-center mb-5'>
                    <Check />
                    <p className='text-white ml-2 whitespace-pre-line'>
                    Auto-invest in the whole crypto market with a single {"\n"} click
                    </p>
                </div>
            </div>


        </div>
        <div className="w-2/4">
            <img src={MyImage} alt="My Image" className="h-auto max-w-full shadow-round shadow-almost-green" />
        </div>
    </section>
  )
}
