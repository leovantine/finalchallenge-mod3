import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
border: solid 6px #0263F5;
/* background-image: linear-gradient(135deg, #0071C4, #FFA800); */
background-color: #fff;
box-shadow: 0 0 0.3em #CCCCCD;
width: 18vw;
height: 45vh;
/* border-radius: 13px; */
`

export default function App({children}){
    return(
        <Container>{children}</Container>
    )
}