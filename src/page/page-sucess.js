import { DivCardSucess, H1Card, ParagraphCard, DivContainerCard, ImgPCSucess} from "../card/card-style"
import {Main} from "../page/page-style"
import img from '../images/icon-success.svg'
import React from "react";

export const PageSucess = ()=>{

    return(
        <Main>
        <DivCardSucess>
            <DivContainerCard>
                <ImgPCSucess src={img}/>
                <H1Card>Thanks for subscribing!</H1Card>
                <ParagraphCard>A confirmation email has been sent. Please open it and click the button inside to confirm your subscription</ParagraphCard>
            </DivContainerCard>
        </DivCardSucess>
        </Main>
    )
}