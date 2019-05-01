import React, { Component, Input } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';

export class Categories extends Component {

    state = {
        selectedCategory: '',
    }

    changeCategory = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.props.selectCategory(e.target.value)
    }

    render() {

        return (
            <NativeSelect
                value={this.state.selectedCategory}
                name='selectedCategory'
                onChange={this.changeCategory}
            >

                {categories.map(category =>
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                )}
            </NativeSelect>
        )
    }
}

const categories = [
    {
        name: 'Any Category',
        id: 0
    },
    {
        name: 'General Knowledge',
        id: '9'
    },
    {
        name: 'Entertainment: Books',
        id: 10
    },
    {
        name: 'Entertainment: Film',
        id: 11
    },
    {
        name: 'Entertainment: Music',
        id: 12
    },
    {
        name: 'Entertainment: Musical & Theatres',
        id: 13
    },
    {
        name: 'Entertainment: Television',
        id: 14
    },
    {
        name: 'Entertainment: Video Games',
        id: 15
    },
    {
        name: 'Entertainment: Board Games',
        id: 16
    },
    {
        name: 'Science & Nature',
        id: 17
    },
    {
        name: 'Science: Computers',
        id: 18
    },
    {
        name: 'Science: Mathematics',
        id: 19
    },
    {
        name: 'Mythology',
        id: 20
    },
    {
        name: 'Sports',
        id: 21
    },
    {
        name: 'Geography',
        id: 22
    },
    {
        name: 'History',
        id: 23
    },
    {
        name: 'Politics',
        id: 24
    },
    {
        name: 'Art',
        id: 25
    },
    {
        name: 'Celebrities',
        id: 26
    },
    {
        name: 'Animals',
        id: 27
    },
    {
        name: 'Vehicles',
        id: 28
    },
    {
        name: 'Entertainment: Comics',
        id: 29
    },
    {
        name: 'Science: Gadgets',
        id: 30
    },
    {
        name: 'Entertainment: Japanese Anime & Manga',
        id: 31
    },
    {
        name: 'Entertainment: Cartoon & Animations',
        id: 32
    },
]

export default Categories
