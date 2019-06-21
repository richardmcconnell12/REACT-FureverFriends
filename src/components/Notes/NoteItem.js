import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import EditNotesModal from '../Notes/EditNotesModal'
import { Button, CardActions } from '@material-ui/core/'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import { Fab, Icon, DeleteIcon } from '@material-ui/core/'
import './notes.css'

export default class NotesItem extends Component {

    state = {
        editModalVis: false,
    }

    closeModalVis = () => this.setState({ editModalVis: false })

    render() {
        return (
            <div key={this.props.note.id} className="int-note">
                <Typography variant="body2" color="textPrimary" component="p" className="int-p">{this.props.note.note}</Typography>
                <CardActions>
                    <Button type="button" variant="outlined" size="small" color="primary"
                        className="edit-note"
                        onClick={() => {
                            this.setState({ editModalVis: true })
                        }}
                    >
                        Edit note
                </Button>
                    <DeleteForeverIcon className="delete-note" color="primary"
                        onClick={() => this.props.deleteNote(this.props.note.id)}
                    >
                        Delete note
                </DeleteForeverIcon>
                </CardActions>
                {this.state.editModalVis ? <EditNotesModal editModalVis={this.state.editModalVis} close={this.closeModalVis} interestedPet={this.props.interestedPet} note={this.props.note} updateNotes={this.props.updateNotes} editNote={this.props.editNote} /> : null}
            </div >

        )
    }
}
