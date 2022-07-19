import React from 'react'

import emailicon from "../images/emailicon.png"

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
color: #CCCCCD;
font-family: 'Excon', sans-serif;
text-align: center;
`
const BackgroundDiv = styled.div`
width: 50vw;
height: 60vh;
background-color: #fff;
box-shadow: 0 0 1em grey;
display: flex;
align-items: center;
`
const NdBackgroundDiv = styled.div`
width: 15vw;
height: 60vh;
background-color: #D91140;
display: flex;
justify-content: center;
align-items: center;
`
const InputDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: 2.5vw;
width: 20vw;
height: 40vh;
`
const Input = styled.input`
border: none;
background-color: #EEF3FA;
font-family: 'Ranade', sans-serif;
font-size: 0.7rem;
width: 30vw;
height: 8vh;
padding: 2vh;
`
const Textarea = styled.textarea`
border: none;
background-color: #EEF3FA;
font-family: 'Ranade', sans-serif;
font-size: 0.7rem;
padding: 2vh;
width: 30vw;
height: 12vh;
`
const Button = styled.button`
width: 10vw;
height: 6vh;
font-family: 'Ranade', sans-serif;
background-color: #D91140;
color: #EEF3FA;
&:hover{
    cursor: pointer;
    filter: blur(0.8px);
}
`

export default function Contact() {
    return (
        <Container>
            <H1>CONTACT ME</H1>
            <BackgroundDiv>
                <NdBackgroundDiv>
                    <img src={emailicon} alt=""></img>
                </NdBackgroundDiv>
                <form>
                    <InputDiv>
                        <Input type="text" placeholder="YOUR NAME" name="name"></Input>
                        <Input type="email" placeholder="YOUR E-MAIL" name="e-mail"></Input>
                        <Textarea placeholder="WRITE YOUR MESSAGE HERE"></Textarea>
                        <Button>SEND</Button>
                    </InputDiv>
                </form>
            </BackgroundDiv>
        </Container>
    )
}