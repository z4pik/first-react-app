import React from 'react'
import { ReactComponent as LogoIcon} from '../../images/logo.svg'
import { Button } from '../button'



export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8  text-white">
      <div className="flex items-center">
        <LogoIcon className='cursor-pointer'/>
      </div>

      <nav className="hidden xl:flex justify-center items-center space-x-6">
        <ul className="flex space-x-10 text-almost-white cursor-pointer">
          <li>Invest</li>
          <li>Business</li>
          <li>Company</li>
        </ul>
      </nav>

      <div className="hidden xl:flex space-x-5 ">
        <Button isGreen={true}> Get Started </Button>
      </div>
    </header>

  )
}
