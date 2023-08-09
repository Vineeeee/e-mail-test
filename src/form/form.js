import { ParagraphCard, InputSubmitCard, InputCard, DivParagraphs, ParagraphCardInvalid} from "../card/card-style"
import '../form/Form.css'
import React,{ useState } from "react"

export const Form = ({children})=>{

    const [invalid, setInvalid] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const valor = e.target[0].value.trim()

        if (valor === "") {
            setInvalid(false)
            return
        } else if (valor.endsWith(".com")){
            setInvalid(true)
            window.open("http://localhost:3000/sucess", "_self");
        } else{
            setInvalid(false)
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <DivParagraphs>
                <ParagraphCard>E-mail adress</ParagraphCard>
                <ParagraphCardInvalid className={!invalid?"":"none"} >Invalid e-mail required</ParagraphCardInvalid>
            </DivParagraphs>
            <InputCard autoFocus className={!invalid?"invalid":""} ></InputCard><br/>
            <InputSubmitCard/>
        </form>
    )
}