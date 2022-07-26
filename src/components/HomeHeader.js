import React from 'react'

import {
  BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom"

import styled from 'styled-components'

const MainDiv = styled.div`
/* border: solid red; */
width: 100%;
height: 13vh;
background-color: #1B1D22;
display: flex;

@media (max-width: 768px) {
  width: 100%;
}
`
const TitleDiv = styled.div`
/* border: solid yellow; */
display: flex;
justify-content: center;
align-items: center;
width: 15vw;
height: 15vh;
margin-left: 5vw;

@media (max-width: 768px) {
  width: 13vw;
  height: 12vh;
}
`
const H1 = styled.h1`
font-family: 'Rosaline', cursive;
font-size: 3.5rem;
color: #CDCDCE;
border: solid #0263F5;
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

@media (max-width: 768px) {
  font-size: 3rem;
  width: 17vw;
  &:hover{
    cursor: pointer;
    filter: blur(0.8px);
    transform: rotateZ(360deg);
    transition: all 1s;
  }
}
`
const Info = styled.div`
width: 50%;
height: 14vh;
margin-left: 35vw;

@media (max-width: 768px) {
  height: 12vh;
  width: 80vw;
  margin: auto;
}
`
const Ul = styled.ul`
display: flex; 
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 14vh;
list-style: none;

@media (max-width: 768px) {
  height: 11vh;
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
}
`
const Linking = styled(Link)`
text-decoration: none;
`
const Li = styled.li`
font-family: 'Ranade', sans-serif;
font-size: 0.9rem;
color: #CDCDCE;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
  font-weight: 700;
  filter: blur(0.5px);
}

@media (max-width: 768px) {
  font-size: 0.8rem;
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
          <Linking to="/">
            <Li>HOME</Li></Linking>

          <Linking to="about">
            <Li>ABOUT</Li></Linking>

          <Linking to="projects">
            <Li>PROJECTS</Li></Linking>
            <Linking to="ods">
              <Li>ODS</Li>
            </Linking>
          <Linking to="contact">
            <Li>CONTACT</Li></Linking>
        </Ul>
      </Info>
    </MainDiv>
  )
}