import React from 'react'
import Card from "../components/Card.js"

import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 110vh;
background-color: #1B1D22;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`
const TitleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 12vw;
height: 8.1vh;
`
const H2 = styled.h2`
font-family: 'Excon', sans-serif;
color: #CCCCCD;
font-size: 1.2rem;
`
const PDiv = styled.div`
width: 12vw;
display: flex;
justify-content: center;
align-items: center;
`
const A = styled.a`
text-decoration: none;
`
const P = styled.p`
font-family: 'Excon', sans-serif;
font-size: 1rem;
color: #0263F5;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}`

export default function Projects() {

    return (
        <Container>
            <Card>
                <TitleDiv>
                    <H2>PORTFLOW</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/Portflow" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>FINN</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/Finn" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>HARRY POTTER</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/HarryPotter-SimplePage" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>LEOFLIX</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/LEOFLIX" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>TODOFLIX</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/TODOFLIX-MOD2" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>CRONÔMETRO</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/Cronometro" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>DOG API</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/Dog-API" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>

            <Card>
                <TitleDiv>
                    <H2>RECIPES PAGE</H2>
                </TitleDiv>
                <PDiv>
                <A href="https://github.com/leovantine/recipes_desafio" target="_blank"><P>CHECK HERE</P></A>
                </PDiv>
            </Card>
        </Container>
    )
} 