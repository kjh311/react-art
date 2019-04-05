import React, {Component} from 'react';
import './NoteForm.scss';

class NoteForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newNoteContent: '',
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}

//when the user input changes, set the newNoteContent
//to the value of what's in the input box
	handleUserInput(e){
		// console.log(this.state.newNoteContent);
		this.setState({
			newNoteContent: e.target.value, //the value of the text input
		})
	}

	writeNote(){
		//call a method that sets the noteContent fo a note to
		//the value of the input
		this.props.addNote(this.state.newNoteContent);

		//set new noteContent back to empty string
		this.setState({
			newNoteContent: '',
		})
	}

	render(){
		return(
			<div className="formWrapper d-flex justify-content-center">
				<input className="noteInput"
				placeholder="Write a new note..."
				value={this.state.newNoteContent}  
				onChange={this.handleUserInput} />
				<button className="noteButton"
				onClick={this.writeNote} >Add Note</button>
			</div>
			)
		}
	}

export default NoteForm;