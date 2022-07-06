import React from 'react'
import HomeHeader from "./components/HomeHeader.js"
import HomeMain from "./components/HomeMain"
import HomeFooter from "./components/HomeFooter.js"

import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export default function App(){
  return(
    <>
    <GlobalStyle />
    <HomeHeader />
    <HomeMain />
    <HomeFooter/>
    </>
  )
}