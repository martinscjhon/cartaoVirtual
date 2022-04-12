import styled from 'styled-components';

const Container = styled.div` 
    display: flex;
    gap: 1rem;  
        
`;

const Image = styled.img`    
    margin-top: 1rem;

    height: 0.97rem;    

`;

const Title = styled.h4`   
   margin-top: 1rem;

   color: #626262;   
   font-weight: 500;

   font-style: italic;
`;

export { 
    Container,
    Title,
    Image
}