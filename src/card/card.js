import { DivCard, H1Card, ParagraphCard, DivContainerCard,
     ListCard, UlCard, ImgPC } from "./card-style"
import { Form } from "../form/form"
import img from '../images/illustration-sign-up-desktop.svg'

export const Card = () =>  {

    return(
        <DivCard className="font-link">
            <DivContainerCard>
                <H1Card>Stay updated!</H1Card>
                <ParagraphCard>Join 60.000+ product managers receiving monthly updates on:</ParagraphCard>
                <UlCard>
                    <ListCard>Product discovery and building what matters</ListCard>
                    <ListCard>Measuring to ensure updates area a sucess</ListCard>
                    <ListCard>And much more!</ListCard>
                </UlCard>
                <Form/>
                <ImgPC src={img}/>
            </DivContainerCard>
        </DivCard>
    )
}