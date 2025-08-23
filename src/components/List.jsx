import React from 'react'

const List = ({text , className}) => {
  return (
    <li className={`${className} list-none cursor-pointer duration-500 text-base hover:text-red font-semibold`}>{text}</li>
  )
}

export default List