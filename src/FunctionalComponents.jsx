import "./App.css";
import React, { useState } from "react";
import useStateManager from "./StateManager";
import StateManager from "./StateManager";

//Error Handling - class / invalid input, network problems
//Convert Class to Function
//Error Handling - function
//Move Axios to Seperate File
//Manage Sate of User Input in New Component

//Form
function Form(props) {
  const { onClickEvent, changeEvent, userName } = useStateManager();
  return (
    <div>
      <form onSubmit={(event) => onClickEvent(event, props)}>
        <input
          type="text"
          value={userName}
          onChange={(event) => changeEvent(event)}
          placeholder="Github Username"
          required
        />
        <button>Add Card</button>
      </form>
    </div>
  );
}

//List of Cards
function CardList(props) {
  let data = Object.values(props);
  return (
    <div>
      {data[0].map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
}

//Card
function Card(props) {
  return (
    <div className="github-profile">
      <img src={props.avatar_url} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
    </div>
  );
}

function App(props) {
  const [profiles, setprofiles] = useState([]);

  const addNewProfile = (profileData) => {
    setprofiles([...profiles, { ...profileData }]);
  };

  return (
    <div className="header">
      {props.title}
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
