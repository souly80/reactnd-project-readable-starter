// @flow

import * as React from "react";
import * as API from './services/api';

export class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {categories: []};
        this.getCategories();
    }
    getCategories() {
        API.getCategories().then((categories) => {
            this.setState({categories});
        })
    }

    renderCategories = () => {
        let retValues: any[] = [];
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