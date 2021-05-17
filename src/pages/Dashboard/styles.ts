import styled,{css} from 'styled-components';
import {shade} from 'polished'

export const Alunos= styled.div`
margin-top:80px;
max-width:700px;
a {
    background:#fff;
    border-radius: 5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration:none;
    transition:transform 0.2s;
    display:flex;
    align-items:center;

    & + a {
        margin-top:16px;
    }
    div{
        flex:1;
    }

    &:hover{
        transform: translateX(10px)
    }
}

img{
    width:64px;
    height:64px;
    border-radius:50%;
}

div {
    margin-left:16px;
    strong{
        font-size:20px;
        color:#3D3D4D;
    }

    p{
        font-size:18px;
        color:#A8A8B3;
    }
}

svg {
    margin-left:auto;
    color:#cbcbd6;
}
`




export const LogoImage = styled.img`
width:200px;
`
export const Title= styled.h1`
font-size:48px;
margin-top:80px;
max-width:450px;
line-height:56px;
color:whitesmoke
`;

export const Form = styled.form`
margin-top:40px;
max-width:700px;
display:flex;

input{
    flex:1;
    height:70px;
    padding:0 24px;
    border:0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    &::placeholder{
        color: #a8a8b3;
    }
}
    
button{
    width:180px;
    height:70px;
    background:#04d361;
    border-radius:0px 5px 5px 0px;
    border:0;
    color:white;
    font-weight:bold;
    transition:background-color 0.2s;
    &:hover{
        background: ${shade(0.2,'#04d361')}
    }
}
`



