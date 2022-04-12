import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Image = styled.img`
    width: 10rem;

    @media(max-width: 420px){
        width: 7rem;
    }
`;

const Title = styled.h4`
    color: #000;
  
    font-size: 1.2rem;
    font-weight: 400;

    text-align: center;  
    
    @media(max-width: 420px){
        font-size: 0.94rem;
    }

    @media(max-width: 320px){
        font-size: 0.75rem;
    }
`;

const Content = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    margin-top: 1rem;

    svg{
        font-size: 2.2rem;
        color: #000;
    }

    transition: .3s;

    :hover{
        opacity: 0.4;        
    }
`;

export {
    Container,
    Title,
    Image,
    Content
}