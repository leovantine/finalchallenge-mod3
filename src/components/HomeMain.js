import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
width: 100%;
height: 70vh;
background-color: #1B1D22;
border: solid red;
`
/* const MainBoxTitles = styled.div`
border: solid blue;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 2vh;
` */
/* const TitlesDiv = styled.div`
border: solid green;
width: 50%;
height: 40vh;
display: flex;
flex-diection: column;
align-items: column;
` */
const TitleDiv = styled.div`
display: flex;
display: flex;
flex-diection: column;
align-items: center;
`
const H2 = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.9rem;
font-weight: 500;
color: #5D5E62;
display: flex;
flex-diection: column;
align-items: center;
`
const LineDiv = styled.div`
width: 60%;
height: 0.1vh;
border: solid 4px #F2D78A;
margin-left: 2vw;
display: flex;
justify-content: center;
align-items: center;
`
const MainTitleDiv = styled.div`
border: solid purple;
display: flex;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
font-family: 'Excon', sans-serif;
font-size: 2.8rem;
letter-spacing: 3px;
color: #CCCCCD;
`
const ThirdTitleDiv = styled.div`
border: solid orange;
display: flex;
justify-content: flex-end;
width: 44.3vw;
`
const ThirdTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.8rem;
letter-spacing: 3px;
color: #F2D78A;
`
const FourthTitleDiv = styled.div`
border: solid pink;
display: flex;
justify-content: flex-end;
width: 44.3vw;
`
const FourthTitle = styled.h2`
font-family: 'Excon', sans-serif;
font-size: 1.6rem;
letter-spacing: 3px;
color: #F2D78A;
`


/* const NdTitleDiv = styled.div`
border: solid yellow;
` */


export default function Main() {
  return (
    <MainDiv>



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



    </MainDiv>
  )
}