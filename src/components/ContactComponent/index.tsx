import React, {useMemo} from "react";
import phoneImg from '../../assets/phone.png';
import faceImg from '../../assets/face.png';
import instaImg from '../../assets/insta.png';
import emailImg from '../../assets/email.png';
import siteImg from '../../assets/vector.png';
import linkeImg from '../../assets/linke.png';
import { 
    Container,
    Image,
    Title
} from "./styles";

interface ICardProps{      
    icon: "phone" | "face" | "insta" | "email" | "site" | "linke";
    text: string;     
}

const ContactComponent: React.FC<ICardProps> = ({    
   icon,
   text,
}) => {

    const IconSelected = useMemo(() => {
        switch (icon) {
            case 'phone':
                return phoneImg

            case 'face':
                return faceImg

            case 'insta':
                return instaImg

            case 'site':
                return siteImg

            case 'email':
                return emailImg

            case 'linke':
                return linkeImg

            default:
                return undefined;                
        }
    }, [icon])

    return(
        <Container>            
            <Image src={IconSelected} alt={IconSelected} />
            <Title>{text}</Title>
        </Container>          
    );
}
     
export { ContactComponent }