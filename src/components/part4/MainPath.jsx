import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './menuComponents/Main';
import About from './menuComponents/About';
import Contact from "./menuComponents/Contact";
import User from "./menuComponents/User";
import ErrorComp from "./menuComponents/ErrorComp";
import Menu from './Menu';

const MainPath = () => {
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={() => <Main name="Main"/>}  />
            <Route exact path="/about" component={About}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/user/:fname/:lname" component={User}/>
            <Route exact path="/contact" render={() => <Contact name="contact"/>}  />
            <Route component={ErrorComp}/>
        </Switch>
        </>
    );
}

export default MainPath;