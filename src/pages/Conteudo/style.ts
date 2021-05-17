import styled from 'styled-components'

export const LogoImage = styled.div`
align-items:center;
display:flex;
h2{
    margin-left:15px;
    color:whitesmoke;
}
img{
    width:100px;    
}
`
export const Header = styled.header`
display:flex;
align-items:center;
justify-content: space-between;
a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`

export const AlunoInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: whitesmoke;
      }
      p {
        font-size: 18px;
        color: whitesmoke;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: whitesmoke;
      }
      span {
        display: block;
        margin-top: 4px;
        color: whitesmoke;
      }
    }
  }
`;


export const Conteudos= styled.div`
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
    width:200px;
    height:100px;
    
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

 