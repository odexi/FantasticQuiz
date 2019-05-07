import React, { Component } from 'react'
import { CardContent, Typography, Button } from '@material-ui/core';

export class Results extends Component {

  reset = () => {
    this.props.resetQuizState();
    this.props.resetGame();
  }  
  render() {
    return (
        <CardContent>
                <span style={{}}>Category: {this.props.options.categoryId !== 0 ? this.props.options.categoryName : 'any'}, 
                    Difficulty: {this.props.options.difficulty}
                </span>
            <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h2">
                Congratulations {this.props.options.nickname}, you got {this.props.data.rightAnswers} out of {this.props.data.questionAmount} right!
            </Typography><br></br>
            <Button variant="contained" color="primary" onClick={this.reset}>Back to main menu</Button> 
        </CardContent>
      
    )
  }
}

export default Results
