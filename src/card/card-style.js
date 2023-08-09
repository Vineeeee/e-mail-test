import styled from 'styled-components'
import { variables } from '../variables/variables'
import img from '../images/icon-list.svg'

export const DivCard = styled.div`
width: 590px;
height: 425px;
border-radius: 20px;
position: relative;
background-color: ${({variabls}) => variables.colors.White};
`

export const DivCardSucess = styled.div`
width: 420px;
height: 407px;
border-radius: 20px;
position: relative;
background-color: ${({variabls}) => variables.colors.White};
`

export const H1Card = styled.h1`
    color: ${({variabls}) => variables.colors.DarkSlateGrey};
    font-size: 35px;
`
export const ParagraphCard = styled.p`
color: ${({variabls}) => variables.colors.DarkSlateGrey};
font-weight: 800;
font-size: 11px;
max-width: 290px;
margin: 0 0 15px 0;
`

export const DivContainerCard = styled.div`
margin: 60px 0 0 50px;
`

export const UlCard = styled.ul`
list-style-image: url(${img});
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const ListCard = styled.li`
margin:4px 0;
font-size: 12px;
font-weight: 600;
color: ${({variabls}) => variables.colors.DarkSlateGrey};
`

export const InputSubmitCard = styled.input.attrs({ 
    type: 'submit',
    value: 'Subscribe to monthly newsletter'
  })`transition: 0.2s ease-in-out;
  padding: 20px 38px 20px 30px;
  border-radius: 5px;
  border: 1px solid ${({variabls}) => variables.colors.DarkSlateGrey};
  background-color: ${({variabls}) => variables.colors.DarkSlateGrey};
  color: ${({variabls}) => variables.colors.White};
  &:hover{
    background-color: ${({variabls}) => variables.colors.tomato};
    cursor: pointer;
    border: 1px solid ${({variabls}) => variables.colors.tomato};
    animation-name: hover-animation;
    animation-duration: 2s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
    @keyframes hover-animation {
        0% { background-color: hsl(20, 100%, 67%) }
        100% { background-color: ${({variabls}) => variables.colors.tomato} }
    }
  }`

  export const InputCard = styled.input.attrs({ 
    type: 'email',
    placeholder: 'email@company.com'
  })`padding: 10px 80px 10px 10px;
     border-radius: 7px;
     border: 1px solid ${({variabls}) => variables.colors.Grey};   
     margin-bottom: 20px;
  `

  export const ImgPC = styled.img`
    display: flex;
    max-width: 220px;
    position: absolute;
    right: 20px;
    top: 10%;
  `

  export const DivParagraphs = styled.div`
  display: flex;
  gap: 80px;
  `

  export const ParagraphCardInvalid = styled.p`
  color: ${({variabls}) => variables.colors.tomato};
font-weight: 800;
font-size: 11px;
max-width: 290px;
margin: 0 0 15px 0;
  `

  export const ImgPCSucess = styled.img`
  max-width: 45px;
  `