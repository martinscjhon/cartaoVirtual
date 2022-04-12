import styled from "styled-components";

const Container = styled.div`     
    justify-content: center;   
    align-items: center;
    text-align: center;
    text-align: center;    
`;

const Perfil = styled.img`      
    margin-top: 2rem;   

    background: linear-gradient(360deg, #FF830B -55.72%, rgba(255, 131, 11, 0) 45.18%);              
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;   

    margin-top: 2rem;          
    margin-bottom: 0.5rem; 
    padding-bottom: 0.5rem;
        
    text-align: left;

    color: #fff;

    border-bottom: 1px solid  #FF830B;
    
    width: 20rem;  
    
    @media(max-width: 375px){
        width: 18rem;           
    }
`;

const Subtitle = styled.h4`    
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;

    color: #fff;

    font-size: 1rem;
    font-weight: 300;  

    text-align: left;
`;


export { 
    Container,
    Perfil,    
    Title,
    Subtitle,   
}