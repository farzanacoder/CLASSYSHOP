import React from 'react'
import { Children } from 'react'

const Flex = ({children , className}) => {
  return (
    <div className={`${className} flex`}>{children}</div>
  )
}

export default Flex