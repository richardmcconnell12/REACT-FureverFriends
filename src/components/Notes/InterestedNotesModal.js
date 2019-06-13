import React, { Component } from 'react'
import { DialogContent, DialogActions, Dialog, DialogTitle, Button, TextField } from '@material-ui/core';

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
            petId: this.props.petsId.$t,
            notes: this.state.notes,
            date: dateTime
        }

        this.props.create(notesObj)
        this.props.hideModal()
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
                open={this.props.modalVis}
                onBackdropClick={this.props.close}
            >

                <DialogTitle>Add Notes</DialogTitle>
                <DialogContent>
                    <TextField margin="normal" id="notes" label="Add notes" type="text" variant="outlined" onChange={this.handleChange} fullWidth />
                </DialogContent>

                <DialogActions>
                    <Button color="secondary" varient="contained" onClick={this.addNotes}>Submit!</Button>
                    <Button color="secondary" varient="contained" onClick={this.props.close}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}
