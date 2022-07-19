import React from 'react'

import img1 from "../images/img1.jpg"

import styled from 'styled-components'

const MainDiv = styled.div`
border: solid red;
width: 100%;
height: 87vh;
background-color: #1B1D22;
`
const FirstDivImg = styled.div`
border: solid yellow;
height: 80vh;
`
const BorderDiv = styled.div`
border: solid 10px #D91140;
border-radius: 10px;
width: 12vw;
height: 40vh;
display: flex;
align-items: center;
`
const ImgOne = styled.img`
width: 90%;
&:hover{
    transition: all 0.5s;
    cursor: pointer;
    transform: scale(1.1);
}
`

export default function About() {
    return (
        <MainDiv>
            <FirstDivImg>
                <BorderDiv>
                    <ImgOne src={img1} alt="Leonardo Vantine"></ImgOne>
                </BorderDiv>
            </FirstDivImg>
        </MainDiv>
    )
}