import React from 'react'

import HomeHeader from "./components/HomeHeader.js"

import Route from "./components/Routes.js"

import {BrowserRouter as Router
} from "react-router-dom"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}` 

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <HomeHeader />
      <Route />
    </Router>
  )
}

