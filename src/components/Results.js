import React, { Component } from 'react'
import { CardContent, Typography } from '@material-ui/core';

export class Results extends Component {
  render() {
    return (
        <CardContent>
            <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h2">
                Okay {this.props.options.nickname}, you got {this.props.data.rightAnswers} out of {this.props.data.questionAmount} right!
            </Typography><br></br>
            <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h5">
                Category: {this.props.options.categoryName}
            </Typography><br></br>
            <Typography style={{ paddingTop: '1em', paddingBottom: '1em' }} variant="h5" component="h5">
                Difficulty: {this.props.options.difficulty}
            </Typography>  
        </CardContent>
      
    )
  }
}

export default Results
