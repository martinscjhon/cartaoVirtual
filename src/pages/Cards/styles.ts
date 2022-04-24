import styled from 'styled-components';

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 0.9rem solid  #ff840a;
    
    height: 100vh; 

    .icon-arrow{                
       margin-bottom: 5rem;
       margin-top: 0rem;
    }

    @media(max-width: 420px){
        min-height: 115vh;        
    } 
    
    @media(max-width: 320px){
        min-height: 130vh;        
    } 
`;

const Line = styled.div`
    width: 25rem;

    border-bottom: 1px solid #ff840a;      
    
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media(max-width: 420px){
        width: 20rem;        
    }

    @media(max-width: 375px){
        width: 18rem;       
    }
`;

const Image = styled.img`      
`;

const Title = styled.h1`
    font-size: 1.5rem;

    color: #ffff;

    @media(max-width: 420px){
        font-size: 1.2rem;       
    }

    @media(max-width: 375px){
        font-size: 1rem;      
    }
`;

const Span = styled.span`
    color: #ff840a;         
`;

const ContainerContact = styled.div` 
    > a{
        text-decoration: none;
    }        
`;

const Box = styled.div`  
    margin-left: 0.2rem;
`;


export{
    Container,
    Line,
    Title,
    Span,  
    Image, 
    ContainerContact,
    Box
}