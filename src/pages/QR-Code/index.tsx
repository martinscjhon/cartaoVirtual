import React from "react";
import { Link } from "react-router-dom";
import background from '../../assets/backnew.png';
import { QrComponent } from "../../components/QRCodeComponent";
import { 
    Container, 
    ContentQR, 
    ContainerGrid,
    Title
} from "./styles";

const PageQRCode: React.FC = () => (
    <Container> 
        <Title>
            Conheça nossos fundadores!
        </Title>
        <ContentQR>
            <ContainerGrid>
                
                <Link to="/jose.mauro">
                    <QrComponent 
                        icon="qr_ZeMauro"
                        text="José Mauro" 
                    />
                </Link>

                <Link to="/joao.castro">
                    <QrComponent 
                        icon="qr_Joao"
                        text="João Castro" 
                    />
                </Link>

                <Link to="/juliano.ramos">
                    <QrComponent 
                        icon="qr_Juliano"
                        text="Juliano Ramos" 
                    />
                </Link>

                <Link to="/eduardo.castro">
                    <QrComponent 
                        icon="qr_Eduardo"
                        text="Eduardo Castro" 
                    />
                </Link>
             
            </ContainerGrid>
        </ContentQR>
    </Container>
)

export { PageQRCode }