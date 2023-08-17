import React from 'react'

const borderStyles = 'border-2 border-white rounded-lg'
const greenStyles = "text-almost-black bg-almost-green rounded-lg"

export const Button = ({
    children = '',
    hasBorder = false,
    isGreen = false
}) => {
  return (
    <button className={`px-5 py-2  ${hasBorder && borderStyles} ${ isGreen && greenStyles}` }>{ children }</button>
  )
}
