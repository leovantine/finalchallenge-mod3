import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
width: 100%;
height: 60vh;
background-color: #1B1D22;
/* border: solid red; */
`
const TitlesDiv = styled.div`
/* border: solid green; */
width: 100%;
height: 60vh;
padding: 15vh;
display: flex;
flex-direction: column;
`
const TitleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* border: solid yellow; */
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
border: solid 4px #D91140;
margin-left: 2vw;
`
const MainTitleDiv = styled.div`
/* border: solid purple; */
display: flex;
justify-content: center;
`
const H1 = styled.h1`
font-family: 'Excon', sans-serif;
font-size: 3.6rem;
letter-spacing: 3px;
color: #CCCCCD;
`
const ThirdTitleDiv = styled.div`
/* border: solid orange; */
display: flex;
justify-content: flex-end;
width: 67vw;
`
const ThirdTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.8rem;
letter-spacing: 3px;
color: #D91140;
`
const FourthTitleDiv = styled.div`
/* border: solid pink; */
display: flex;
justify-content: flex-end;
width: 67vw;
`
const FourthTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.6rem;
letter-spacing: 3px;
color: #D91140;
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