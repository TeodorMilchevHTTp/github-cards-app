import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

//Error Handling - class / invalid input, network problems
//Convert Class to Function
//Error Handling - function
//Move Axios to Seperate File
//Manage Sate of User Input in New Component

//Form
function Form(props) {
    console.log(`Form props: ${props}`)
const [userName, setUserName] = useState('');

  const changeEvent = (e) => {
    setUserName(e.target.value)
  };

  const onClickEvent = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    props.onSubmit(response.data);
    setUserName('');
  }
      return(
        <div>
          <form onSubmit={onClickEvent}>
            <input 
            type="text" 
            value={userName}
            onChange = {(event) => changeEvent(event)}
            placeholder='Github Username' 
            required
            />
            <button>Add Card</button>
          </form>
        </div>
      )
}


//List of Cards
function CardList(props) {
    console.log(`CardList props: ${props}`)
    return(
    <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
    );
}

//Card
function Card(props) {
    console.log(`Card props: ${props}`)
    return(
        <div className='github-profile'>
         <img src={props.profile.avatar_url} />
         <div className='info'>
           <div className='name'>{props.profile.name}</div>
           <div className='company'>{props.profile.company}</div>
         </div>
       </div>
    );
}

function App(props){
    console.log(`App props: ${props}`)
const [profiles, setprofiles] = useState([]);
  
 const addNewProfile = (profileData) => {
    setprofiles([...profiles, {...profileData}])
    }

    return(
      <div className='header'>
        {props.title}
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={profiles}/>
      </div>
    )
  }


export default App;
