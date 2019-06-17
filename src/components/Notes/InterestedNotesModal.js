import React, { Component } from 'react'
import { DialogContent, DialogActions, Dialog, DialogTitle, Button, TextField } from '@material-ui/core';
import dbCalls from '../../modules/dbCalls';

export default class InterestedNotesModal extends Component {

    state = {
        notes: null
    }

    addNotes = () => {
        const dateTime = new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        });

        const notesObj = {
            userId: parseInt(sessionStorage.getItem("userId")),
            petId: this.props.interestedPet.petId,
            note: this.state.notes,
            date: dateTime
        }
        dbCalls.postNote(notesObj).then(() => this.props.updateNotes())
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
                open={this.props.addModalVis}
                onBackdropClick={this.props.close}
            >

                <DialogTitle>Add Notes</DialogTitle>
                <DialogContent>
                    <TextField margin="normal" id="notes" label="Add notes" type="text" multiline variant="outlined" onChange={this.handleChange} fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button color="secondary" varient="contained" onClick={this.addNotes}>Submit!</Button>
                    <Button color="secondary" varient="contained" onClick={() => {
                        this.props.close("addModalVis")
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}
