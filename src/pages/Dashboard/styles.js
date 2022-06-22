import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


`

export const HeaderDashboard = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin:29px 0px 29px 0px;

button{
    width: 55.49px;
    height: 32px;
    background: var(--grey3);
    border-radius: 4px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--grey0);
}

button:hover{
    background: var(--grey2);
}
`

export const InfoUser = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
height: 118px;
border: 1px solid var(--grey2);

p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey0);
}

span{ 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey1);
}
`

export const WholeDashboard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const DashboardHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin:29px 0px 29px 0px;
width: 780px;

p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--grey0);
}

button{
    width: 32px;
    height: 32px;
    background: var(--grey3);
    border-radius: 4px;
    border:none;
}

button:hover{
    background: var(--grey2);
}
`
export const DashboardBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: 416px;
background: var(--grey3);
`