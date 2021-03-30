import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Menu from './MenuMain';
import form from './part2/form/MainForm';
import todo from './part2/toDoList/ToDo';
import pokeAPI from './part3/api/MainAPI';
import useEffect from './part3/context/UseEffect';
import ErrorComp from "./part4/menuComponents/ErrorComp";
const Overall = () => {
    return (
        <>
                  <Menu/>
        <Switch>
            <Route exact path="/" component={form} />
            <Route exact path="/todolist" component={todo} />
            <Route exact path="/pokeAPI" component={pokeAPI} />
            <Route exact path="/clickBtn" component={useEffect} />
            <Route component={ErrorComp}/>
        </Switch>  
        </>
    )
}

export default Overall;

