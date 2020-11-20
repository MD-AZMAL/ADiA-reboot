import React from 'react'
import { Container } from 'rsuite';

const Stack = ({children} :any) => {
    return (
        <Container style={{position: 'relative'}}>
            {children}
        </Container>
    )
}

export default Stack;
