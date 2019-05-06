import React, { Component } from 'react'
import { Button, Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Categories from './Categories';

export class QuizSetup extends Component {
    state = {
        nickname: '',
        numberOfQuestions: 5,
        category: 0,
        categoryName: '',
        difficulty: 'any',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    selectCategory = (categoryId, category) => {
        this.setState({ category: categoryId.toString(), categoryName: category })
    }

    render() {
        return (
            <div style={setupStyle}>
                <FormControl style={optionStyle}>
                    <span>Nickname:</span><br></br>
                    <Input
                        type="text"
                        name="nickname"
                        value={this.state.nickname}
                        onChange={this.onChange}
                    ></Input></FormControl><br></br>

                <FormControl style={optionStyle}>
                    <span>Number of questions:</span><br></br>
                    <NativeSelect
                        name="numberOfQuestions"
                        value={this.state.numberOfQuestions}
                        onChange={this.onChange}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </NativeSelect></FormControl><br></br>
                <FormControl style={optionStyle}>
                    <span>Select category:</span><br></br>
                    <Categories selectCategory={this.selectCategory} /></FormControl><br></br>
                <FormControl style={optionStyle}>
                    <span>Select difficulty:</span><br></br>
                    <NativeSelect
                        name="difficulty"
                        value={this.state.difficulty}
                        onChange={this.onChange}
                    >
                        <option value='any'>Any</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </NativeSelect><br></br>

                </FormControl><br></br>

                <Button variant="contained" color="primary"
                    onClick={this.props.getQuestions
                        .bind(this, this.state.nickname, this.state.numberOfQuestions, this.state.category, this.state.categoryName, this.state.difficulty)}
                >
                    Start
                </Button>
            </div>
        )
    }
}



const setupStyle = {
    textAlign: 'center',
    padding: '10px'
}

const optionStyle = {
    margin: '2em',
}

export default QuizSetup
