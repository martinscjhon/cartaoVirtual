import styled from "styled-components";

const Container = styled.div`
    display: grid;    
    justify-content: center;
    align-items: center;
   
    border-bottom: 0.9rem solid  #ff840a;
    
    height: 100vh;   
                
`;

const ContentQR = styled.div`
    background-color: #FFF;       

    @media(min-width: 320px){          
        width: 90%;
        max-height: 93%;
        margin-left: auto;
        margin-right: auto;     
    }   
`;

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;       

    > a{
        text-decoration: none;               
    }    

    @media(min-width: 320px){                            
        margin-left: auto;
        margin-right: auto;        
        padding: 1rem;              
    }   
`;

const Title = styled.h1`
    color: #FFF;      
     
    @media(max-width: 320px){                            
        text-align: center;                 
    }

    @media(min-width: 375px){                            
        text-align: center;         
        margin-top: 0rem;   
        margin-bottom: -8rem;
    }
`;

export {
    Container,   
    ContentQR,
    ContainerGrid,
    Title
}