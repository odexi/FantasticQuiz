import React, { Component } from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import uuid from 'uuid/v4';

export class Quiz extends Component {

    state = {
        currentQuestionNumberIndex: 0,
        isAnswered: false,
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
        console.log("You answered " + answer)
        console.log("The correct answer is " + this.props.questions[this.state.currentQuestionNumberIndex].correct_answer)
    }

    render() {
        return (
            <Card style={layoutStyle}>

                <CardContent>
                    <span style={{ float: 'right' }}>1/10</span>
                    <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h2">
                        {this.props.questions[this.state.currentQuestionNumberIndex].question}
                    </Typography>

                </CardContent>

                {this.randomizeAnswerOrder(this.props.questions[this.state.currentQuestionNumberIndex].incorrect_answers, this.props.questions[this.state.currentQuestionNumberIndex].correct_answer).map(answer =>
                    <Button
                        style={answerButtonStyle} 
                        size="large" 
                        color="primary"
                        key={uuid()}
                        onClick={this.checkTheAnswer.bind(this, answer)}
                    >
                        {answer}
                    </Button>
                )}

            </Card>
        )
    }
}

const answerButtonStyle = {
    width: '100%',
    flex: '10',
    border: '1px solid black',
    marginBottom: '1em'

}

const layoutStyle = {
    textAlign: 'center',
    padding: '10px'
}

export default Quiz
