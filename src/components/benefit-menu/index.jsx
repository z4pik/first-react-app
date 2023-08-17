import React from 'react'
import { BenefitItem } from '../benefit-item'

export const BenefitMenu = ({ items }) => {
  return (
    <div className="flex space-x-4">
        {items.map(({ text, icon, desc }) => (
            <span key={text}>
            <BenefitItem text={text} icon={icon} desc={desc} />
            </span>
        ))}
    </div>

  )
}
