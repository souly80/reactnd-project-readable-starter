import React, { Component } from 'react';
import {Main} from "./main";
import {Category} from "./category";
import {Modify} from "./modify";
import {Route, Switch} from "react-router-dom";
import Header from "./header";

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/modify' component={Modify}/>
                </Switch>
            </div>
        )
    }
}

export default App;
