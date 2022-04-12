import styled from 'styled-components';

interface IContainerProps{
    imageFile: string;
}

const Container = styled.div<IContainerProps>`
    background: no-repeat center/cover url(${props => props.imageFile});    

    height: 100vh;  
   
    @media(max-width: 420px){
        min-height: 115vh;        
    } 

    @media(max-width: 320px){
        min-height: 130vh;        
    } 
`;

export { Container }