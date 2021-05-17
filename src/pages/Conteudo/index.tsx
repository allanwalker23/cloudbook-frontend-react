import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../logo.png';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { AlunoInfo, Conteudos, Header, LogoImage } from './style';
import api from '../../services/api';

interface AlunoParams{
    id:string;
}
interface Aluno{
    id:number;
    nome:string;
    avatar_url:string;
    created_at:string;
    updated_at:Date;
}

interface Conteudo{
    id:number;
    nome:string;
    avatar_url:string;
    descricao:string;
    
}

const Conteudo: React.FC = () =>{
    const [aluno,setAluno]=useState<Aluno | null>(null);
    const [countConteudos,setCountConteudos]=useState(0);
    const [conteudos,setConteudos]=useState<Conteudo[]>([]);
    const {params} = useRouteMatch<AlunoParams>();

    useEffect(()=>{
        api.get("/alunos/"+Number(params.id)).then(response=>{
            const aluno= response.data;
            aluno.created_at=new Date(aluno.created_at).toLocaleString();
            console.log(aluno)
            setAluno(aluno)
        })

        api.get("/conteudos/"+Number(params.id)).then(response=>{
            const conteudo=response.data;
            setCountConteudos(conteudo.length)
        conteudo.forEach((conteudo:Conteudo) => {
            setConteudos([...conteudos,conteudo]);
        });
            

        })
 
    },[params.id])
    return(
        <>
        <Header>
            <LogoImage >
                <img src={logoImg} alt="Cloudbook"/>
                <h2>Cloudbook Alunos</h2>
            </LogoImage>
            
            <Link to="/">
                <FiChevronLeft size="16"/>
                Voltar
            </Link>
        </Header>

        <AlunoInfo>
        <header>
          <img
            src={aluno?.avatar_url}
            alt={aluno?.nome}
          />
          <div>
            <strong>{aluno?.nome}</strong>
            <p>Criado em {aluno?.created_at}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{countConteudos}</strong>
            <span>Conteúdos adicionados</span>
          </li>
          
        </ul>
      </AlunoInfo>

      <Conteudos>
       {
           conteudos.map(conteudo=>(
            <a href={conteudo.avatar_url}>
            <img
            src={conteudo.avatar_url}
            alt={conteudo.nome}
            />
            <div>
                <strong>{conteudo.nome}</strong>
                <p>{conteudo.descricao}</p>
            </div>
    
            <FiChevronRight size={20} />
    
            </a>

           ))
       }
      


    </Conteudos>

    
      </>
    )
}

export default Conteudo;