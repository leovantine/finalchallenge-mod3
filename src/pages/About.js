import React, {useState} from 'react'

import img1 from "../images/img1.jpg"

import styled from 'styled-components'

const Container = styled.div`
border: solid red;
width: 100%;
height: 87vh;
background-color: #1B1D22;
`
const FirstInfo = styled.div`
border: solid pink;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
const BorderImgDiv = styled.div`
border: solid 6px #0263F5;
border-radius: 5px;
width: 12vw;
height: 42vh;
margin: 2.5vw;
`
const Img = styled.img`
width: 100%;
height: 40.7vh;
margin: 2vh;
border: solid 4px #CCCCCD;
border-radius: 5px;
`
const P = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 1.2rem;
font-weight: 600;
color: #CCCCCD;
width: 45vw;
text-align: center;
`
const LanguageButton = styled.button`
width: 8vw;
height: 5vh;
margin-top: 47vh;
font-family: 'Ranade', sans-serif;
font-size: 0.6rem;
`

export default function About() {
    return (
        <Container>

            <FirstInfo>
            <BorderImgDiv>
                <Img src={img1} alt="Leonardo Vantine"></Img>
            </BorderImgDiv>
            <P>Meu nome é Leonardo Vantine e tenho 17 anos de idade. Atualmente moro em Santana do Deserto, Minas Gerais. Morei em Três Rios, Rio de Janeiro até os meus 13 anos de idade. Sempre fui muito determinado e disposto a mudanças e novidades. No ano de 2019 me mudei para Minas Gerais em busca de oportunidades de vida para meu crescimento pessoal e profissional. Me tornei jovem líder da Onda Solidária e resultou em muitas oportunidades.</P>
            <LanguageButton>TRADUZIR PARA INGLÊS</LanguageButton>
            </FirstInfo>

        </Container>
    )
}