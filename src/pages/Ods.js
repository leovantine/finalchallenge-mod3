import React from 'react'
import OdsCards from '../components/OdsCards.js'

import ods1 from '../images/ods1.jpg'
import ods8 from '../images/ods8.jpg'
import ods9 from '../images/ods9.jpg'
import ods13 from '../images/ods13.webp'
import ods14 from '../images/ods14.jpg'

import styled from 'styled-components'

const Container = styled.div`
background-color: #1B1D22;
width: 100%;
height: 87vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const H1 = styled.h1`
text-align: center;
font-family: 'Excon', sans-serif;
font-size: 1.8rem;
padding: 3vh;
color: #CCCCCD;
`
const BoxDiv = styled.div`
border: solid 8px #0263F5;
background-color: #1B1D22;
box-shadow: 0 0 1em grey;
width: 70vw;
height: 70vh;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const A = styled.a`

`
const Img = styled.img`
width: 100%;
height: 22.5vh;
&:hover{
    cursor: pointer;
    opacity: 0.5;
}
`

export default function App(){
    return(
        <Container>
            <H1>OS OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL EM SANTANA DO DESERTO</H1>
            <BoxDiv>
                <OdsCards>
                <A href="https://unric.org/pt/objetivo-1-erradicar-a-pobreza-2/" target="_blank"><Img src={ods1} alt="Erradicar a pobreza - ODS 1"></Img></A>
                </OdsCards>

                <OdsCards>
                <A href="https://unric.org/pt/objetivo-8-trabalho-digno-e-crescimento-economico/" target="_blank"><Img src={ods8} alt="Trabalho digno e crescimento econômico - ODS 8"></Img></A>
                </OdsCards>

                <OdsCards>
                <A href="https://unric.org/pt/objetivo-9-industria-inovacao-e-infraestruturas-2/" target="_blank"><Img src={ods9} alt="Indústria, inovação e infraestruturas - ODS 9"></Img></A>
                </OdsCards>

                <OdsCards>
                <A href="https://unric.org/pt/objetivo-13-acao-climatica/" target="_blank"><Img src={ods13} alt="Ação climática - ODS 13"></Img></A>
                </OdsCards>

                <OdsCards>
                <A href="https://unric.org/pt/objetivo-14-proteger-a-vida-marinha/" target="_blank"><Img src={ods14} alt="Proteger a vida marinha - ODS 14"></Img></A>
                </OdsCards>
            </BoxDiv>
        </Container>
    )
}