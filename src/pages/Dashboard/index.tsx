import React, { FormEvent, useEffect, useState } from 'react';
import logoImg from '../../logo.png';
import {Alunos, Form, LogoImage, Title} from './styles';
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface Aluno{
    id:number;
    nome:string;
    avatar_url:string;
    created_at:string;
    updated_at:Date;
}
const Dashboard : React.FC = () =>{
    const [newAluno,setNewAluno]=useState('');
    const[alunos,setAlunos]=useState<Aluno[]>([]);
    

   

    function handleSearchAluno(event:FormEvent<HTMLFormElement>)
    :void{
        event.preventDefault();
        
        const response = api.get("/alunos/searchName/"+newAluno).then(r=>{
        const alunos = r.data;
        console.log(alunos)
        alunos.forEach((aluno: Aluno) => {
            aluno.created_at=new Date(aluno.created_at).toLocaleString();
            setAlunos([aluno])    
        });
        
        
        })
        
        setNewAluno('');

    }

return(
<>
    <LogoImage src={logoImg} alt="GitHub Explorer" />
    <Title>Veja seus conteúdos</Title>
    <Form onSubmit={handleSearchAluno}>
    <input placeholder="Pesquise seu nome"
    value={newAluno}
    onChange={(e)=>setNewAluno(e.target.value)}
        ></input>
        <button type="submit">Pesquisar</button>
    </Form>
    <Alunos>
        {
        alunos.map(aluno=>(
        <Link key={aluno.id} to={`/alunos/${aluno.id}`}>
        <img
        src={aluno.avatar_url}
        alt={aluno.nome}
        />
        <div>
            <strong>{aluno.nome}</strong>
            <p>Criado em {aluno.created_at}</p>
        </div>

        <FiChevronRight size={20} />

        </Link>
        ))}

    </Alunos>
        
    
</>
)
}
export default Dashboard