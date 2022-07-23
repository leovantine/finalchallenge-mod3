import React from 'react'

import styled from 'styled-components'

const MainDiv = styled.div`
width: 100%;
height: 57vh;
background-color: #1B1D22;

@media (max-width: 768px) {
  /* border: solid red; */
}
`
const TitlesDiv = styled.div`
width: 100%;
height: 60vh;
padding: 15vh;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
  /* border: solid yellow; */
  height: 56vh;
}
`
const TitleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
  /* border: solid pink; */

}
`
const H2 = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.9rem;
font-weight: 500;
color: #5D5E62;


`
const LineDiv = styled.div`
width: 46%;
height: 0.1vh;
border: solid 4px #0263F5;
margin-left: 2vw;

@media (max-width: 768px) {
  width: 45vw; 
}
`
const MainTitleDiv = styled.div`
display: flex;
justify-content: center;

@media (max-width: 768px) {
}
`
const H1 = styled.h1`
font-family: 'Excon', sans-serif;
font-size: 3.6rem;
letter-spacing: 3px;
color: #CCCCCD;

@media (max-width: 768px) {
  /* border: solid green;  */
  font-size: 1.7rem;
  width: 70vw;
  text-align: center;
}
`
const ThirdTitleDiv = styled.div`
display: flex;
justify-content: flex-end;
width: 67vw;

@media (max-width: 768px) {
  /* border: solid grey;  */
  width: 66.5vw;
}
`
const ThirdTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.8rem;
letter-spacing: 3px;
color: #0263F5;

@media (max-width: 768px) {
  font-size: 2rem;
}
`
const FourthTitleDiv = styled.div`
display: flex;
justify-content: flex-end;
width: 67vw;

@media (max-width: 768px) {
  /* border: solid purple;  */
  width: 66.5vw;
}
`
const FourthTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.6rem;
letter-spacing: 3px;
color: #0263F5;

@media (max-width: 768px) {
  font-size: 1.8rem;
}
`

export default function Main() {
  return (
    <MainDiv>

      <TitlesDiv>

        <TitleDiv>
          <H2>HI, I'M</H2>
          <LineDiv></LineDiv>
        </TitleDiv>

        <MainTitleDiv>
          <H1>LEONARDO VANTINE</H1>
        </MainTitleDiv>

        <ThirdTitleDiv>
          <ThirdTitle>A FRONTEND</ThirdTitle>
        </ThirdTitleDiv>

        <FourthTitleDiv>
          <FourthTitle>DEVELOPER</FourthTitle>
        </FourthTitleDiv>

      </TitlesDiv>

    </MainDiv>
  )
}