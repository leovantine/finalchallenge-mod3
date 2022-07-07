import React from 'react'
import github from "../images/github.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

import styled from 'styled-components'

const MainDiv = styled.div`
border: solid green;
width: 100%;
height: 27vh;
background-color: #1B1D22;
`
const IconsDiv = styled.div`
border: solid orange;
width: 5%;
height: 26vh;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 4vw;
`
const Img = styled.img`
display: flex;
width: 55%;
margin: 2vh;
&:hover{
  cursor: pointer;
  transform:scale(1.1);
  filter: blur(0.5px);
}
`
const InfoFooterDiv = styled.div`
border: solid purple;
width: 100%;
height: 10vh;
display: flex;
`
const NameDiv = styled.div`
border: solid yellow;
width: 80%;
display: flex;
justify-content: flex-end;
align-items: center;
`
const P = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 1rem;
font-weight: 600;
color: #CDCDCE;
`
const LogoDiv = styled.div`
border: solid pink;
width: 7%;
display: flex;
justify-content: center;
align-items: center;
`
const H3 = styled.h3`
display: flex;
justify-content: center;
font-family: 'Rosaline', cursive;
font-size: 3.5rem;
color: #CDCDCE;
border: solid #D91140;
border-radius: 50px;
width: 6vw;
height: 12vh;
&:hover{
  cursor: pointer;
  filter: blur(0.8px);
  transform: rotateZ(360deg);
  transition: all 1s;
}
`


export default function Footer(){
  return(
    <MainDiv>

      <InfoFooterDiv>

      <IconsDiv>
      <a href="https://github.com/leovantine" target="_blank"><Img src={github} alt="Github icon"></Img></a>
      <a href="https://www.instagram.com/_leovantine/" target="_blank"><Img src={instagram} alt="Instagram icon"></Img></a>
      <a href="https://www.facebook.com/leovantine" target="_blank"><Img src={facebook} alt="Facebook icon"></Img></a>
      </IconsDiv>

      <NameDiv>
        <P>LEONARDO VANTINE</P>
        </NameDiv>

        <LogoDiv>
        <H3>L</H3>
      </LogoDiv>

      </InfoFooterDiv>
    </MainDiv>
  )
}