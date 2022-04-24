import React from "react";
import { CardComponent } from "../../components/CardComponent/Card";
import { ContactComponent } from "../../components/ContactComponent";
import { FiArrowLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';
import { 
    Box, 
    Container, 
    ContainerContact,
    Line, 
    Span,
    Title, 
    Image 
} from "./styles";

const EduardoCastro: React.FC = () => (
    <Container>          
        <Image src={logo} alt="logo"/>       
        <Line />

        <Title>
            Seu transporte em um nível 
            <br />
            que você <Span>jamais</Span> imaginou!
        </Title>

        <ContainerContact>
            <CardComponent 
                photo="perfilEduardo"
                name="Eduardo Castro" 
                cargo="Founder & COO"            
            />

            <ContactComponent 
                icon="email" 
                text= "eduardo.castro@oser.app"
            />

            <Box>
                <ContactComponent  
                    icon="phone"                 
                    text= "+55 21 99501-8971"               
                />
            </Box>

            <a href="https://oser.app/" target='_blank'>
                <ContactComponent 
                    icon="site"         
                    text= "www.oser.app"
                />  
            </a>        

            <a href="https://www.facebook.com/oserbrasil/" target='_blank'>
                <ContactComponent 
                    icon="face" 
                    text= "eduardo.castro@oser.app"
                />
            </a>

            <a href="https://www.instagram.com/oser.brasil/" target='_blank'>
                <ContactComponent 
                    icon="insta" 
                    text= "eduardo.castro@oser.app"
                />
            </a>

            <a href="https://www.linkedin.com/company/79662805" target='_blank'>
                <ContactComponent 
                    icon="linke" 
                    text= "eduardo.castro@oser.app"
                />
            </a>
        </ContainerContact>              
    </Container>
)

const JulianoRamos: React.FC = () => (
    <Container>          
        <Image src={logo} alt="logo"/>       
        <Line />

        <Title>
            Seu transporte em um nível 
            <br />
            que você <Span>jamais</Span> imaginou!
        </Title>

        <ContainerContact>
            <CardComponent 
                photo="perfilEduardo"
                name="Juliano Ramos" 
                cargo="CTO"            
            />

            <ContactComponent 
                icon="email" 
                text= "juliano.ramos@oser.app"
            />

            <Box>
                <ContactComponent  
                    icon="phone"                 
                    text= "+55 21 99501-8971"               
                />
            </Box>

            <a href="https://oser.app/" target='_blank'>
                <ContactComponent 
                    icon="site"         
                    text= "www.oser.app"
                />  
            </a>        

            <a href="https://www.facebook.com/oserbrasil/" target='_blank'>
                <ContactComponent 
                    icon="face" 
                    text= "juliano.ramos@oser.app"
                />
            </a>

            <a href="https://www.instagram.com/oser.brasil/" target='_blank'>
                <ContactComponent 
                    icon="insta" 
                    text= "juliano.ramos@oser.app"
                />
            </a>

            <a href="https://www.linkedin.com/company/79662805" target='_blank'>
                <ContactComponent 
                    icon="linke" 
                    text= "juliano.ramos@oser.app"
                />
            </a>
        </ContainerContact>
    </Container>
)

const JoseMauro: React.FC = () => (
    <Container>          
        <Image src={logo} alt="logo"/>       
        <Line />

        <Title>
            Seu transporte em um nível 
            <br />
            que você <Span>jamais</Span> imaginou!
        </Title>

        <ContainerContact>
            <CardComponent 
                photo="perfilEduardo"
                name="José Mauro" 
                cargo="CEO"            
            />

            <ContactComponent 
                icon="email" 
                text= "jose.mauro@oser.app"
            />

            <Box>
                <ContactComponent  
                    icon="phone"                 
                    text= "+55 21 99501-8971"               
                />
            </Box>

            <a href="https://oser.app/" target='_blank'>
                <ContactComponent 
                    icon="site"         
                    text= "www.oser.app"
                />  
            </a>        

            <a href="https://www.facebook.com/oserbrasil/" target='_blank'>
                <ContactComponent 
                    icon="face" 
                    text= "jose.mauro@oser.app"
                />
            </a>

            <a href="https://www.instagram.com/oser.brasil/" target='_blank'>
                <ContactComponent 
                    icon="insta" 
                    text= "jose.mauro@oser.app"
                />
            </a>

            <a href="https://www.linkedin.com/company/79662805" target='_blank'>
                <ContactComponent 
                    icon="linke" 
                    text= "jose.mauro@oser.app"
                />
            </a>
        </ContainerContact>
    </Container>
)

const JoaoCastro: React.FC = () => (
    <Container>          
        <Image src={logo} alt="logo"/>       
        <Line />

        <Title>
            Seu transporte em um nível 
            <br />
            que você <Span>jamais</Span> imaginou!
        </Title>

        <ContainerContact>
            <CardComponent 
                photo="perfilEduardo"
                name="João Castro" 
                cargo="Product Ower"            
            />

            <ContactComponent 
                icon="email" 
                text= "joao.castro@oser.app"
            />

            <Box>
                <ContactComponent  
                    icon="phone"                 
                    text= "+55 21 99501-8971"               
                />
            </Box>

            <a href="https://oser.app/" target='_blank'>
                <ContactComponent 
                    icon="site"         
                    text= "www.oser.app"
                />  
            </a>        

            <a href="https://www.facebook.com/oserbrasil/" target='_blank'>
                <ContactComponent 
                    icon="face" 
                    text= "joao.castro@oser.app"
                />
            </a>

            <a href="https://www.instagram.com/oser.brasil/" target='_blank'>
                <ContactComponent 
                    icon="insta" 
                    text= "joao.castro@oser.app"
                />
            </a>

            <a href="https://www.linkedin.com/company/79662805" target='_blank'>
                <ContactComponent 
                    icon="linke" 
                    text= "joao.castro@oser.app"
                />
            </a>
        </ContainerContact>
    </Container>
)

export { 
    EduardoCastro, 
    JulianoRamos, 
    JoseMauro,
    JoaoCastro 
}


