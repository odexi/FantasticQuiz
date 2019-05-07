import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import About from './components/pages/About';
import axios from 'axios';
import './App.css';
import QuizSetup from './components/QuizSetup';
import Quiz from './components/Quiz';
import uuid from 'uuid/v4';

class App extends Component {
  state = {
    questions: [],
    options: {}
  }

  componentDidMount() {
    
  }

  getQuestions = (nickname, numberOfQuestions, categoryId, categoryName, difficulty) => {
    let url = `https://opentdb.com/api.php?type=multiple&amount=${numberOfQuestions}`

    if (categoryId !== 'any') {
      url = url + `&category=${categoryId}`
    }

    if (difficulty !== 'any') {
      url = url + `&difficulty=${difficulty}`
    }

    axios.get(url)
      .then(res => {
        if (res.status === 200) {
          res.data.results.map(result => result = this.createAnswerObjects(result))

          let options = {
            nickname: nickname,
            categoryId: categoryId,
            categoryName: categoryName,
            difficulty: difficulty
          }

          this.setState({
            questions: this.decodeQuestionsHtmlEntity(res.data.results),
            options: options
          })
        }
        else {
          console.log("Api call was unsuccessfull!")
        }

      })
  }

  createAnswerObjects = (result) => {

    let correctAnswer = result.correct_answer
    let answers = []

    for (const [index, value] of result.incorrect_answers.entries()) {
      let answer = {
        text: value,
        id: 'i' + uuid()
      }

      answers.push(answer)
    }

    result.incorrect_answers = answers
    result.correct_answer = {
      text: correctAnswer,
      id: 'i' + uuid()
    }

    return result;
  }

  decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  decodeQuestionsHtmlEntity = (results) => {
    results = results.map(result => {
      result.question = this.decodeHtml(result.question);
      result.correct_answer.text = this.decodeHtml(result.correct_answer.text);
      result.incorrect_answers.map(res => this.decodeHtml(res.text));
      return result
    })
    return results
  }

  resetGame = () => {
    this.setState({
      questions: []
    })
    //ReactDOM.render(this.render(), document.getElementById('root'))
  }

  render() {
    return (
      <div>

        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>


        <div className="App">
          <div className="container">
            {this.state.questions.length === 0 ?
              <Header />
              : null}
            {/* <Route exact path="/" render={props => ( */}
              {/* <React.Fragment> */}
                {this.state.questions.length > 0 ? <Quiz questions={this.state.questions} options={this.state.options} resetGame={this.resetGame}/> : <QuizSetup getQuestions={this.getQuestions} />}

              {/* </React.Fragment> */}
            {/* )} /> */}
            {/* <Route path="/about" component={About} /> */}

          </div>
        </div>
      </div>


    );
  }
}

export default App;
