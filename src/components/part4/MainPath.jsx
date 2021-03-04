import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './menuComponents/Main';
import About from './menuComponents/About';
import Contact from "./menuComponents/Contact";
import ErrorComp from "./menuComponents/ErrorComp";
import Menu from './Menu';

const MainPath = () => {
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={Contact} />
            <Route exact path="/contact" component={About} />
            <Route component={ErrorComp}/>
        </Switch>
        </>
    );
}

export default MainPath;