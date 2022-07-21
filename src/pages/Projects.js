/* import React from 'react'
import Card from "../components/Card.js"

import styled from 'styled-components'

const Container = styled.div`
/* border: solid red; */
width: 100%;
height: 100vh;
background-color: #1B1D22;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
const LinearDiv = styled.div`
/* border: solid pink; */
width: 100%;
height: 8vh;
background-image: linear-gradient(135deg, #0263F5, #610091);
/* border-radius: 13px; */
`
const TitleDiv = styled.div`
/* border: solid orange; */
display: flex;
justify-content: center;
align-items: center;
height: 20vh;
`
const H2 = styled.h2`
font-family: 'Excon', sans-serif;
color: #0263F5;
font-size: 2rem;
`
const ButtonDiv = styled.div`
/* border: solid red; */
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
`
const Button = styled.button`
width: 10vw;
height: 6vh;
border-radius: 20px;
border: none;
background-image: linear-gradient(135deg, #0263F5, #610091);
font-family: 'Excon', sans-serif;
font-size: 1rem;
font-weight: bolder;
color: #CCCCCD;
&:hover{
    cursor: pointer;

}
`

export default function Projects() {

    return (
        <Container>
            <Card>
                <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>PORTFLOW</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>FINN</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>HARRY POTTER</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>LEOFLIX</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>TODOFLIX</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>CRONÔMETRO</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>DOG API</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
            <Card>
            <LinearDiv></LinearDiv>
                <TitleDiv>
                <H2>RECIPES PAGE</H2>
                </TitleDiv>
                <ButtonDiv>
                    <Button>CHECK HERE</Button>
                </ButtonDiv>
            </Card>
        </Container>
    )
} */