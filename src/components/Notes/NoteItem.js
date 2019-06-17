import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import dbCalls from '../../modules/dbCalls'
import './notes.css'

export default class NotesItem extends Component {

    render() {
        console.log("NOTE item", this.props.note)
        console.log("Note item ID", this.props.note.id)
        return (
            <div key={this.props.note.id}>
                <Typography variant="body2" color="textPrimary" component="p">{this.props.note.note}</Typography>
                {/* <button type="button"
                    className="edit-note"
                    onClick={
                        this.changeModalVis}
                        >
                        Edit note
                </button> */}
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
