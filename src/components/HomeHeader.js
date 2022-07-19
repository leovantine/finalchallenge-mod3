import React from 'react'

import {
  BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom"

import styled from 'styled-components'

const MainDiv = styled.div`
width: 100%;
height: 13vh;
background-color: #1B1D22;
display: flex;
`
const TitleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 15vh;
margin-left: 5vw;
`
const H1 = styled.h1`
font-family: 'Rosaline', cursive;
font-size: 3.5rem;
color: #CDCDCE;
border: solid #D91140;
border-radius: 50px;
width: 6vw;
height: 12vh;
display: flex;
justify-content: center;
align-items: center;
align-items: center;
&:hover{
  cursor: pointer;
  filter: blur(0.8px);
  transform: rotateZ(360deg);
  transition: all 1s;
}
`
const Info = styled.div`
width: 50%;
height: 14vh;
margin-left: 35vw;
`
const Ul = styled.ul`
display: flex; 
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 14vh;
list-style: none;
`
const Linking = styled(Link)`
text-decoration: none;
`
const Li = styled.li`
font-family: 'Ranade', sans-serif;
font-size: 1rem;
color: #CDCDCE;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
  font-weight: 700;
  filter: blur(0.5px);
}

/* font-family: 'Excon', sans-serif; */
`
export default function Header() {
  return (
    <MainDiv>
      <TitleDiv>
        <H1>L</H1>
      </TitleDiv>
      <Info>
        <Ul>
          <Linking to="about">
            <Li>ABOUT</Li></Linking>
          <Linking to="projects">
            <Li>PROJECTS</Li></Linking>
          <Linking to="contact">
            <Li>CONTACT</Li></Linking>
        </Ul>
      </Info>
    </MainDiv>
  )
}