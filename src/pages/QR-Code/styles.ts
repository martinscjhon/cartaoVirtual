import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    border-bottom: 0.9rem solid  #ff840a;
    
    height: 100vh;    
    
    @media(max-width: 420px){
        min-height: 115vh;        
    }

    @media(max-width: 320px){
        min-height: 130vh;            
    }
`;

const ContentQR = styled.div`
    background-color: #FFF;     
    
    width: 30rem;
    height: 33rem;

    padding: 1rem;

    border-radius: 2rem;

    
    @media(max-width: 420px){
        width: 22rem;
        height: 27rem;

        padding: 1rem;
    }

    @media(max-width: 320px){
        width: 19rem;
        height: 27rem;

        padding: 1rem;
    }
`;


const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;    
    
    margin-top: 2rem;    

    > a{
        text-decoration: none;               
    }    
`;

const Title = styled.h1`
    margin-bottom: 3rem;

    color: #FFF;  

     
    @media(max-width: 420px){
       font-size: 2rem;

       text-align: center;       
    }
`;

export {
    Container,   
    ContentQR,
    ContainerGrid,
    Title
}