import React, { Component } from 'react';
import './App.scss';
import Nav from './nav';
import Heading from './heading';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase';
import 'firebase/database';

class App extends Component {

constructor(props){

  super(props);
  this.addNote = this.addNote.bind(this);

  this.app = firebase.initializeApp(DB_CONFIG);

  this.db = this.app.database().ref().child('notes');

//setup react state of our component
  this.state = {
    notes: [],
  }
}

componentWillMount(){


  const previousNotes = this.state.note;


//datasnapshot
  this.database.on('child_added', snap => {
    previousNotes.push({
      id: snap.key,
      noteContent: snap.val().noteContent,
    })

    this.setState({
      notes: previousNotes
    })
  })
}


addNote(note){
  //push note onto notes array
  this.database.push().set({ noteContent: note });

}

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
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
          <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
