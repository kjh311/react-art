import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Nav from './nav';
import Heading from './heading';
import Note from './Note/Note';

class App extends Component {

constructor(props){
  super(props);


//setup react state of our component
  this.state = {
    notes: [
      { id: 1, noteContent: "Note 1 here!"},
      { id: 2, noteContent: "Note 2 here!"},
    ],
  }
}

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
        <div className="heading">React todo</div>
          <Nav />
          <Heading />
          <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return(
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
                )
            })
           
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
