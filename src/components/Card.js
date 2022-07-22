import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
border: solid 6px #0263F5;
/* background-image: linear-gradient(135deg, #0071C4, #FFA800); */
box-shadow: 0 0 0.3em #CCCCCD;
display: flex;
width: 24vw;
height: 10vh;
/* border-radius: 13px; */
`

export default function App({children}){
    return(
        <Container>{children}</Container>
    )
}