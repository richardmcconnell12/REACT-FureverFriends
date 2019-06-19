import React, { Component } from 'react'
import { DialogContent, DialogActions, Dialog, DialogTitle, Button, TextField } from '@material-ui/core';
import dbCalls from '../../modules/dbCalls'


export default class EditNotesModal extends Component {

    state = {
        note: this.props.note.note,
        // date: this.props.note.date
    }

    handleChange = (evt, data) => {
        console.log("evt", evt.target.value)
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    editNote = () => {
        const editedNoteObj = {
            id: this.props.note.id,
            note: this.state.note,
            // date: this.props.dateTime
        }

        dbCalls.patchNote(this.props.note.id, editedNoteObj)
            .then(this.props.updateNotes)
        this.props.close("editModalVis")
    }

    render() {
        return (
            <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                maxWidth="sm" fullWidth
                open={this.props.editModalVis}
                onClose={() => {
                    this.props.close("editModalVis")
                }}>

                <DialogTitle>Edit Note</DialogTitle>
                <DialogContent>
                    <TextField margin="normal" id="note" label="edit notes" type="text" multiline variant="outlined" value={this.state.note} onChange={this.handleChange} fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button color="secondary" varient="contained" onClick={this.editNote}>Edit</Button>
                    <Button color="secondary" varient="contained" onClick={() => {
                        this.props.close("editModalVis")
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}
