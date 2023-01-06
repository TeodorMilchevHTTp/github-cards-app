import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

//Error Handling - class / invalid input, network problems
//Convert Class to Function
//Error Handling - function
//Move Axios to Seperate File
//Manage Sate of User Input in New Component

//Form
class Form extends Component {
  state = {userName: ''};
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(response.data);
    this.setState({userName: ''})
  }

    render() {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            value={this.state.userName}
            onChange = {e => this.setState({userName: e.target.value})}
            placeholder='Github Username' 
            required
            />
            <button>Add Card</button>
          </form>
        </div>
      )
    }
}


//List of Cards
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.name} {...profile}/>)}
  </div>
)

//Card
class Card extends Component{

  render() {
    const profile = this.props;
    
    return(
      <div className='github-profile'>
        <img src={profile.avatar_url} />
        <div className='info'>
          <div className='name'>{profile.name}</div>
          <div className='company'>{profile.company}</div>
        </div>
      </div>
    )
  }

}

class App extends Component{
  state = {
    profiles: [],
  }
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, {...profileData}]
    }))
  }

  render() {
    return(
      <div className='header'>
        {this.props.title}
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;
