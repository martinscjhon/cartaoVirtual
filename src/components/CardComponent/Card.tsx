import React, {useMemo} from "react";
import perfilEduardoImg from '../../assets/perfil.png';
import { 
    Container,
    Perfil,
    Title,
    Subtitle,  
} from "./styles";

interface ICardProps{      
    photo: "perfilEduardo";
    name: string;
    cargo: string;  
}

const CardComponent: React.FC<ICardProps> = ({    
    photo,
    name,
    cargo, 
}) => {

    const IconSelected = useMemo(() => {
        switch (photo) {
            case 'perfilEduardo':
                return perfilEduardoImg
            default:
                return undefined;                
        }
    }, [photo])

    return(
        <Container>            
            <Perfil src={IconSelected} alt={name} />          
            <Title>{name}</Title>               
            <Subtitle>{cargo}</Subtitle>               
        </Container>          
    );
}
     
export { CardComponent }