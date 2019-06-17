import React, { Component } from 'react'
import { DialogContent, DialogActions, Dialog, DialogTitle, Button, TextField } from '@material-ui/core';


export default class EditNotesModal extends Component {

    state = {
        notes: null
    }

    editNote = () => {
        const editedNoteObj = {
            userId: parseInt(sessionStorage.getItem("userId")),
            petId: this.props.interestedPet.petId,
            note: this.state.notes,
            date: this.props.dateTime
        }

        // let noteId = this.props.id

        this.props.patchNote(editedNoteObj)
        this.props.close()
    }

    handleChange = (e) => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }


    render() {
        return (
            <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                maxWidth="sm" fullWidth
                open={this.props.editModalVis}
                onBackdropClick={this.props.close}
            >

                <DialogTitle>Edit Note</DialogTitle>
                <DialogContent>
                    <TextField margin="normal" id="notes" label="edit notes" type="text" multiline variant="outlined" onChange={this.handleChange} fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button color="secondary" varient="contained" onClick={this.editNote}>Submit!</Button>
                    <Button color="secondary" varient="contained" onClick={() => {
                        this.props.close("editModalVis")
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}
