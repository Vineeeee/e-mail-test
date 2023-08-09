import styled from 'styled-components'
import { variables } from "../variables/variables"

const Main = styled.main`
    background-color: ${({variabls}) => variables.colors.CharcoalGrey};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export {Main}