import React, { Component } from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import uuid from 'uuid/v4';

export class Quiz extends Component {

    state = {
        currentQuestionNumberIndex: 0,
        isAnswered: false,
    }

    randomizeAnswerOrder = (wrongAnswers, rightAnswer) => {
        // Sekoita oikea vastaus vääriin
        return wrongAnswers
    }

    render() {
        return (
            <Card style={layoutStyle}>

                <CardContent>
                    <span style={{ float: 'right' }}>1/10</span>
                    <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h2">
                        {this.props.questions[0].question}
                    </Typography>

                </CardContent>

                {this.randomizeAnswerOrder(this.props.questions[this.state.currentQuestionNumberIndex].incorrect_answers, this.props.questions[this.state.currentQuestionNumberIndex].correct_answer).map(incorrectAnswer =>
                    <Button
                        style={answerButtonStyle} 
                        size="large" 
                        color="primary"
                        key={uuid()}
                    >
                        {incorrectAnswer}
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
