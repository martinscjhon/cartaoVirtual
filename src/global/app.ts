import styled from 'styled-components';

interface IContainerProps{
    imageFile: string;
}

const Container = styled.div<IContainerProps>`
    background: no-repeat center/cover url(${props => props.imageFile});    
    height: 100%;     
    padding-top: 1rem;   
`;

export { Container }