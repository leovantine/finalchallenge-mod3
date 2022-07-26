import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
border: solid 8px #CCCCCD;
width: 12vw;
height: 25vh;
display: flex;
`

export default function App({children}){
    return(
        <Container>{children}</Container>
    )
}