import { createGlobalStyle } from 'styled-components'; 

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;             
    }
   
    body, html {

        font-family: 'Roboto';          
        overflow-x: hidden;

        @media (max-width: 1080px){
            html{
                font-size: 93.75%;
            }
                
        }
        
        @media (max-width: 720px){
            html{
                font-size: 87.05%;
            }                       
        }           
    }

    button{
        cursor: pointer;   
        font-family: 'Roboto';
    }
    
`; 

export { GlobalStyle }