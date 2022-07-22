import React from 'react'

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"

import styled from 'styled-components'

const Container = styled.div`
/* border: solid red; */
width: 100%;
height: 114vh;
background-color: #1B1D22;
`
const FirstInfo = styled.div`
/* border: solid pink; */
display: flex;
justify-content: center;
align-items: center;
`
const BorderImgDiv = styled.div`
border: solid 6px #0263F5;
border-radius: 5px;
width: 13.5vw;
height: 42vh;
margin: 2.5vw;
`
const Img = styled.img`
width: 100%;
height: 40vh;
margin: 2vh;
border: solid 4px #CCCCCD;
border-radius: 5px;
`
const P = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 1rem;
font-weight: 600;
color: #CCCCCD;
width: 45vw;
text-align: justify;
`
const TranslateP = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 0.6rem;
font-weight: bolder;
position: relative;
top: 11vh;
right: 8.5vw;
color: #0263F5;
&:hover{
    cursor: pointer;

}
`
const NdInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const NdTranslateP = styled.p`
font-family: 'Ranade', sans-serif;
font-size: 0.6rem;
font-weight: bolder;
position: relative;
top: 11vh;
right: 32vw;
color: #0263F5;
&:hover{
    cursor: pointer;

}
`
const NdBorderImgDiv = styled.div`
border: solid 6px #0263F5;
border-radius: 5px;
width: 12vw;
height: 42vh;
position: relative;
left: 2vw;
`
const NdImg = styled.img`
width: 100%;
height: 40.7vh;
margin: 2vh;
border: solid 4px #CCCCCD;
border-radius: 5px;
`
const Hr = styled.hr`
margin: 2vw;
border: solid 2px #CCCCCD;
`

export default function About() {
    return (
        <Container>

            <FirstInfo>
            <BorderImgDiv>
                <Img src={img2} alt="Leonardo Vantine"></Img>
            </BorderImgDiv>
            <P>Meu nome é Leonardo Vantine e tenho 17 anos de idade. Atualmente moro em Santana do Deserto, Minas Gerais. Morei em Três Rios, Rio de Janeiro até os meus 13 anos de idade. Sempre fui muito determinado e disposto a mudanças e novidades. No ano de 2019 me mudei para Minas Gerais em busca de oportunidades de vida para meu crescimento pessoal e profissional. Me tornei jovem líder da Onda Solidária e resultou em muitas oportunidades.</P>
            {/* <TranslateP>TRADUZIR PARA INGLÊS</TranslateP> */}
            </FirstInfo>
            <Hr></Hr>
            <NdInfo>
                <P>Sempre gostei de tecnologia e sentia que algum dia iria atuar em alguma área TI, mas não tinha noção do quão grande é esse mundo. Atráves da Onda Solidária conheci o Vai na Web, logo quando se abriu as inscrições para o curso de Desenvolvedor Front-end. Resolvi me inscrever e fui percebendo com o tempo que é algo que realmente quero me aperfeiçoar cada vez mais e crescer profissionalmente.</P>
                {/* <NdTranslateP>TRADUZIR PARA INGLÊS</NdTranslateP> */}
                <NdBorderImgDiv>
                    <NdImg src={img1} alt="Leonardo Vantine"></NdImg>
                </NdBorderImgDiv>
            </NdInfo>
            <Hr></Hr>
        </Container>
    )
}