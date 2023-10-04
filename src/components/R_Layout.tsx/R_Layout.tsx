import React, { ReactElement } from 'react'
import { Header, BottomHeader, Footer } from '..'

interface Props{
    children: ReactElement
}

const R_Layout = ({children} : Props) => {

  return (
    <>
        <Header/>
        <BottomHeader/>
        {children}
        <Footer/>
    </>
  )
}

export default R_Layout