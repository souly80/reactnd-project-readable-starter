import React, { Component } from 'react'
import Header from "./header";

class Main extends Component {

    render() {
        const { categories } = this.props

        return (
            <div>
                <Header categories={categories}/>
            </div>
        )
    }
}

export default Main
