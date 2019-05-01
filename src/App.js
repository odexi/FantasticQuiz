import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';


import './App.css';
import { template } from '@babel/core';
import QuizSetup from './components/QuizSetup';

class App extends Component {
  state = {
    todos: []
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
  markComplete = (id) => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos
          .filter(todo => todo.id !== id)]
      }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos:
          [...this.state.todos, res.data]
      }));
  }

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
        console.log(res)
      })
  }

  render() {
    console.log(this.state.todos)
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
                <QuizSetup getQuestions={this.getQuestions}/> 
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
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
