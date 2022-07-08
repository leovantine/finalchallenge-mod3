import React from 'react'

import github from "../images/github.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"

import styled from 'styled-components'

const MainDiv = styled.div`
width: 100%;
height: 30vh;
background-color: #1B1D22;
`
const IconsDiv = styled.div`
width: 5%;
height: 28vh;
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
width: 100%;
height: 29vh;
display: flex;
`
const NameDiv = styled.div`
width: 18%;
height: 5vh;
position: relative;
top: 23vh;
left: 72.5vw;
display: flex;
justify-content: center;
align-items: center;
`
const P = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 0.8rem;
font-weight: 600;
color: #CDCDCE;
`

export default function Footer() {
  return (
    <MainDiv>

      <InfoFooterDiv>

        <IconsDiv>
          <a href="https://github.com/leovantine" target="_blank"><Img src={github} alt="Github icon"></Img></a>
          <a href="https://www.instagram.com/_leovantine/" target="_blank"><Img src={instagram} alt="Instagram icon"></Img></a>
          <a href="https://www.facebook.com/leovantine" target="_blank"><Img src={facebook} alt="Facebook icon"></Img></a>
        </IconsDiv>

        <NameDiv>
          <P>Developed by Leonardo Vantine</P>
        </NameDiv>

      </InfoFooterDiv>

    </MainDiv>
  )
}