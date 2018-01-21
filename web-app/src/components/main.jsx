// @flow

import * as React from "react";
import * as API from '../services/api';
import getCategories from "../actions/index";

export class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        //const store = this.props.store;
        //store.dispatch(getCategories(this.props.store.getState(), ["test","test2"]));

        //this.getCategories();
    }

    getCategories() {
        API.getCategories().then((categories) => {
            this.setState({categories});
        })
    }

    renderCategories = () => {
        return "";
        let retValues = [];
        if(this.state.categories.length !== 0) {
            this.state.categories.map((category) => {
                retValues.push(<div>{category.name}</div>);
            });
        }
        return retValues;
    }

    render() {
        return <div>{this.renderCategories()}</div>;
    }
}