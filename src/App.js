import React, { Component } from 'react';
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
    questions: []
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    // .then(res => {
    //   res.data.map(todo => {
    //     todo.completed = false;
    //   })
    //   this.setState({ todos: res.data })
    // })

    // axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  // Toggle Complete
  // markComplete = (id) => {
  //   console.log(id)
  //   this.setState({
  //     todos: this.state.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo;
  //     })
  //   })
  // }

  // // Delete Todo
  // delTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(res => this.setState({
  //       todos: [...this.state.todos
  //         .filter(todo => todo.id !== id)]
  //     }));
  // }

  // // Add Todo
  // addTodo = (title) => {
  //   axios.post('https://jsonplaceholder.typicode.com/todos', {
  //     title,
  //     completed: false
  //   })
  //     .then(res => this.setState({
  //       todos:
  //         [...this.state.todos, res.data]
  //     }));
  // }

  getQuestions = (nickname, numberOfQuestions, categoryId, difficulty) => {
    console.log(nickname, numberOfQuestions, categoryId, difficulty)
    let url = `https://opentdb.com/api.php?type=multiple&amount=${numberOfQuestions}`

    if (categoryId !== 'any') {
      url = url + `&category=${categoryId}`
    }

    if (difficulty !== 'any') {
      url = url + `&difficulty=${difficulty}`
    }

    console.log(url)
    
    axios.get(url)
      .then(res => {
        if (res.status === 200) {     
          // res.data.results.map(result => result.id = uuid())     
          this.setState({questions: this.decodeQuestionsHtmlEntity(res.data.results)})
        } 
        else {
          console.log("Api call was unsuccessfull!")
        }
        
      })
  }

  decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  decodeQuestionsHtmlEntity = (results) => {
    results = results.map(result => {
      result.question = this.decodeHtml(result.question);
      result.correct_answer = this.decodeHtml(result.correct_answer);
      result.incorrect_answers.map(res => this.decodeHtml(res));
      return result
    })
    return results    
  }

  render() {
    return (
      <Router>

        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>


        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                { this.state.questions.length > 0 ? <Quiz questions={this.state.questions} /> : <QuizSetup getQuestions={this.getQuestions}/> }
                
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>


    );
  }
}

export default App;
