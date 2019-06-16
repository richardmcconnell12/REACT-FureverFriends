import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import dbCalls from '../../modules/dbCalls'
import './notes.css'

export default class NotesItem extends Component {
    state = {
        notes: this.props.notes
    }

    componentDidMount() {
        dbCalls.getAllNotes(this.state.notes)
            .then(notes => this.setState({ notes: notes }))

    }


    render() {
        console.log("notes note note", this.props.notes)
        return (
            <div className="pet-notes">
                <Typography variant="body2" color="textPrimary" component="p">{this.props.notes
                    .filter(note => note.petId === this.props.interestedPet.petId)
                    .map(note =>
                        note.note
                    )}</Typography>
                <button type="button"
                    className="edit-note"
                // // onClick={
                // //     this.changeModalVis
                >
                    Edit note
                </button>
                <button type="button"
                    className="delete-note"
                // // onClick={
                // //     this.changeModalVis
                >
                    Delete note
                </button>
            </div>

        )
    }
}
