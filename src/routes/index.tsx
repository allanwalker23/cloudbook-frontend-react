import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Conteudo from '../pages/Conteudo';
import Dashboard from '../pages/Dashboard';


const Routes : React.FC = () =>
<Switch>
    <Route path="/" exact component={Dashboard}></Route>
    <Route path="/alunos/:id+" component={Conteudo}></Route>

</Switch>


export default Routes;