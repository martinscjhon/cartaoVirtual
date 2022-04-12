import React, { useMemo } from "react";
import qr_ZeMauroImg from '../../assets/qr_ZeMauro.png';
import qr_JulianoImg from '../../assets/qr_Juliano.png';
import qr_JoaoImg from '../../assets/qr_Joao.png';
import qr_EduardoImg from '../../assets/qr_Eduardo.png';
import { BiChevronRight } from "react-icons/bi";

import { 
    Container,
    Title,
    Image,
    Content
} from "./styles";

interface IQRProps{
    icon: "qr_ZeMauro" | "qr_Juliano" | "qr_Joao" | "qr_Eduardo" 
    text: string;
}

const QrComponent: React.FC<IQRProps> = ({
    icon,
    text
}) => {

    const QRCodeSelected = useMemo(() => {
        switch(icon){
            case "qr_Eduardo":
                return qr_EduardoImg;

            case "qr_Joao":
                return qr_JoaoImg;

            case "qr_Juliano":
                return qr_JulianoImg;

            case "qr_ZeMauro":
                return qr_ZeMauroImg;
        }
    },[icon])
    return(
        <Container>
           <Image src={QRCodeSelected} alt={text} />

           <Content>
                <Title>{text}</Title>
                <BiChevronRight />
            </Content>
        </Container>
    );
}

export { QrComponent }