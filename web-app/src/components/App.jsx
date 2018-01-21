import React, { Component } from 'react';
import {Main} from "./main";
import {Category} from "./category";
import {Modify} from "./modify";
import {Route, Switch} from "react-router-dom";
import Header from "./header";
import {connect} from "react-redux";
import getCategories from "../actions/index";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {categories: ""};
    }

    componentDidMount() {
        /*const {store} = this.props;
        store.subscribe(() => {
            this.setState({categories: store.getState().categories});
        });*/
    }

    clickHandler = () =>{
        this.props.viewCategories("nf");
    }


    render() {
        return (
            <div>
                <Header />
                <button onClick={this.clickHandler}>Clickme</button>
                <h1>{this.props.categories && this.props.categories.content}</h1>
                <Switch>
                    <Route exact path='/' render={() => <Main store={this.props.store} />}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/modify' component={Modify}/>
                </Switch>
            </div>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {viewCategories: (categories) => dispach(getCategories(categories))}
};

const mapStateToProps = (categories) => {
  return {
      categories : categories ? categories : {content:"test"}
  }
};

export default connect(mapStateToProps, mapDispachToProps)(App);
