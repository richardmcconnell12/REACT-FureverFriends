import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import EditNotesModal from '../Notes/EditNotesModal'
import './notes.css'

export default class NotesItem extends Component {

    state = {
        editModalVis: false,
    }

    closeModalVis = () => this.setState({ editModalVis: false })

    render() {
        return (
            <div key={this.props.note.id}>
                <Typography variant="body2" color="textPrimary" component="p">{this.props.note.note}</Typography>
                <button type="button"
                    className="edit-note"
                    onClick={() => {
                        this.setState({ editModalVis: true })
                    }}
                >
                    Edit note
                </button>
                <button type="button"
                    className="delete-note"
                    onClick={() => this.props.deleteNote(this.props.note.id)}
                >
                    Delete note
                </button>
                {this.state.editModalVis ? <EditNotesModal editModalVis={this.state.editModalVis} close={this.closeModalVis} interestedPet={this.props.interestedPet} note={this.props.note} updateNotes={this.props.updateNotes} editNote={this.props.editNote} /> : null}
            </div>

        )
    }
}
