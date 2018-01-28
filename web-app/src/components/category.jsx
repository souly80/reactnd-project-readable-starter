import React, { Component } from 'react'
import Header from "./header";

class Category extends Component {

    getCategory = (categories) => {
        if (categories) {
            const categoryFound = {
                data: categories.find((category) => (category.path === this.props.categoryPath)),
                index: categories.findIndex((category) => (category.path === this.props.categoryPath))
            }
            if (categoryFound.index === -1) return null
            else return categoryFound
        }
        return null
    }


    render() {
        const { categories, posts, history, categoryPath } = this.props
        //const category = this.getCategory(categories)
        const category = categories.filter((category) => category.path.substring(1) === categoryPath)[0];
        let postsToDisplay = []
        if (category && posts) {
            postsToDisplay = posts.filter( (post) => (post.category === category.name))
        }

        let categoryName = ''
        if (category) categoryName = category.name;

        return (
            <div>
                <Header categories={categories}/>
                <h1 className="title">
                    {categoryName}
                </h1>
            </div>
        )
    }
}

export default Category