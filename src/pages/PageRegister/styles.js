import styled, { keyframes } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: auto;
margin-top: 48px;
`
const appearFromleft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`
const appearFromright = keyframes`
from {
    opacity: 0;
    transform: translateX(50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`

export const FormContainer = styled.div`
background: var(--grey3);
animation: ${appearFromleft} 2s;
form{
    width: 370px;
    height: auto;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 42px 22px;
    

    
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

}


p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey0);
    margin-bottom: 22px;
    margin-top: 42px;
}

span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey1);
    margin-bottom: 28px;

}

label{
    font-family: 'Inter';
    font-style: normal;
    font-size: 12px;
    color: var(--grey0);
    margin-bottom: 22px;
}

input{
    width: 329px;
    height: 48px;
    
    background: var(--grey2);
    border: 1px solid var(--grey2);
    border-radius: 4px;

    margin-bottom: 26px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey0);
}

select{
    width: 329px;
    height: 48px;
    
    background: var(--grey2);
    border: 1px solid var(--grey2);
    border-radius: 4px;

    margin-bottom: 26px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: var(--grey0);
}

button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 324px;
    height: 48px;
    background: var(--pinkprimary);
    border: 1.2182px solid var(--pinkprimary);
    border-radius: 4.06066px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
}

button:hover{
    background-color: var(--pinknegative);
    border: 1.2182px solid var(--pinknegative);
}
`
export const HeaderContainer = styled.div`
display: flex;
margin-bottom: 49px;
animation: ${appearFromright} 2s;

a{
    width: 67.49px;
    height: 40.11px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--grey3);
    border-radius: 4px;
    width: 67.49px;
    height: 40.11px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--grey0);
}

a:hover{
    background: var(--grey2);
}

img{
    margin-right:177px;
}
`

