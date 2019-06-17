import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import './notes.css'

export default class NotesItem extends Component {

    render() {
        return (
            <div key={this.props.note.id}>
                <Typography variant="body2" color="textPrimary" component="p">{this.props.note.note}</Typography>
                <button type="button"
                    className="edit-note"
                    onClick={() => {
                        this.props.modalVis("editModalVis")
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
            </div>

        )
    }
}
