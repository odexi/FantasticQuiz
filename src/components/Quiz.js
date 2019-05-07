import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import Header from './layout/Header'
import Results from './Results'

export class Quiz extends Component {

    state = {
        currentQuestionNumberIndex: 0,
        rightAnswers: 0,
        showResults: false,
    }

    randomizeAnswerOrder = (wrongAnswers, rightAnswer) => {
        wrongAnswers.push(rightAnswer)
        return this.shuffleArray(wrongAnswers)
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    checkTheAnswer = (answer) => {
        if (answer.id === this.props.questions[this.state.currentQuestionNumberIndex].correct_answer.id) {
            document.querySelector(`#${answer.id}`).style.backgroundColor = '#88E823';
            setTimeout(() => {
                let newValue = this.state.rightAnswers + 1
                let newIndex = this.state.currentQuestionNumberIndex + 1;
                if (newIndex < this.props.questions.length) {
                    this.setState({currentQuestionNumberIndex: newIndex, rightAnswers: newValue})
                }
                else {
                    this.setState({currentQuestionNumberIndex: newIndex, rightAnswers: newValue, showResults: true})
                }
            }, 2000)
            
        }
        else {
            document.querySelector(`#${this.props.questions[this.state.currentQuestionNumberIndex].correct_answer.id}`).style.backgroundColor = '#88E823'
            document.querySelector(`#${answer.id}`).style.backgroundColor = '#FF121F'
            setTimeout(() => {
                let newIndex = this.state.currentQuestionNumberIndex + 1;
                if (newIndex < this.props.questions.length) {
                    this.setState({currentQuestionNumberIndex: newIndex})
                }
                else {
                    this.setState({currentQuestionNumberIndex: newIndex, showResults: true})
                }
            }, 2000)
            
        }
    }

    resetQuizState = () => {
        this.setState({
            currentQuestionNumberIndex: 0,
            rightAnswer: 0,
            showResults: false
        })
      }

    render() {
        return (
            <div>
                <Header />
                <Card style={layoutStyle}>

                    <header>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    </header>
                    {!this.state.showResults ?
                        <CardContent>
                            <div>
                                <span style={{ float: 'right' }}>{this.state.currentQuestionNumberIndex + 1 + '/' + this.props.questions.length}</span>
                                <span style={{ float: 'left' }}>{this.props.questions[this.state.currentQuestionNumberIndex].category}</span>
                            </div>
                            
                            <Typography style={{ paddingTop: '2em', paddingBottom: '1em' }} variant="h5" component="h2">
                                {this.props.questions[this.state.currentQuestionNumberIndex].question}
                            </Typography>

                            {this.randomizeAnswerOrder(this.props.questions[this.state.currentQuestionNumberIndex].incorrect_answers, this.props.questions[this.state.currentQuestionNumberIndex].correct_answer).map(answer =>
                                <Button
                                    style={answerButtonStyle}
                                    size="large"
                                    color="primary"
                                    key={answer.id}
                                    id={answer.id}
                                    onClick={this.checkTheAnswer.bind(this, answer)}
                                >
                                    {answer.text}
                                </Button>
                            )}

                            <span style={{textAlign: 'center', paddingTop: '2em'}}>Difficulty: {this.props.questions[this.state.currentQuestionNumberIndex].difficulty}</span>
                        </CardContent>
                        : <Results
                            options={this.props.options}
                            data={{
                                rightAnswers: this.state.rightAnswers,
                                questionAmount: this.props.questions.length
                            }}
                            resetGame={this.props.resetGame} 
                            resetQuizState={this.resetQuizState}/>}

                </Card>
            </div>

        )
    }
}

const answerButtonStyle = {
    width: '100%',
    flex: '10',
    border: '1px solid black',
    marginBottom: '1em',

}

const layoutStyle = {
    textAlign: 'center',
    padding: '10px'
}

export default Quiz
