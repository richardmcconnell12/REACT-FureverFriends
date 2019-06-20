import React, { Component } from "react";
import { Button, CardContent, CardHeader, Card, CardMedia, Typography } from '@material-ui/core';
import InterestedNotesModal from '../Notes/InterestedNotesModal'
import dbCalls from "../../modules/dbCalls"
import NoteList from "../Notes/NoteList";
import "./Pet.css"

export default class PetInterestCard extends Component {

    state = {
        myPet: {},
        addModalVis: false,
        notes: []
    }

    updateNotes = () => {
        dbCalls.getAllNotesByUserAndPet(this.props.sessionId, this.props.interestedPet.petId)
            .then(notes => this.setState({ notes: notes }))
    }

    deleteNote = (id) => {
        dbCalls.removeNote(id)
            .then(() => dbCalls.getAllNotesByUserAndPet(this.props.sessionId, this.props.interestedPet.petId))
            .then(notes => this.setState({ notes: notes }))
    }

    componentDidMount() {
        dbCalls.getOnePet(this.props.interestedPet.petId)
            .then(result => this.setState({ myPet: result.petfinder.pet }))
            .then(() => dbCalls.getAllNotesByUserAndPet(this.props.sessionId, this.props.interestedPet.petId))
            .then(notes => this.setState({ notes: notes }))

    }

    showModalVis = (modal) => {
        this.setState({ [modal]: true })
    }

    closeModalVis = (modal) => {
        this.setState({ [modal]: false })
    }

    render() {
        // const myPet = this.props.interestedPet.petfinder.pet;
        if ("age" in this.state.myPet) {
            return (
                <React.Fragment>
                    <Card>
                        <CardHeader title={this.state.myPet.name.$t} style={{ justifyContent: "center" }} />
                        <CardMedia style={{ height: 300, width: 300, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} image={this.state.myPet.media.photos.photo[3].$t}
                            title={this.state.myPet.name.$t}>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="textPrimary" component="p">{this.state.myPet.breeds.breed.$t}</Typography>
                        </CardContent>
                        <Button type="button" variant="outlined" size="small" color="primary"
                            className="btn-unInterested"
                            onClick={() => {
                                this.props.deleteInterestedPet(this.props.interestedPet.id)
                            }}>
                            Sorry, buddy....
                        </Button>
                        <Button type="button" variant="outlined" size="small" color="primary"
                            className="open-modal"
                            onClick={() => {
                                this.showModalVis("addModalVis")
                            }}>
                            Add a note!
                        </Button>
                        <NoteList interestedPet={this.props.interestedPet} notes={this.state.notes} deleteNote={this.deleteNote} showModalVis={this.showModalVis} updateNotes={this.updateNotes} editNote={this.editNote}></NoteList>
                    </Card>

                    {this.state.addModalVis ? <InterestedNotesModal addModalVis={this.state.addModalVis} close={this.closeModalVis} interestedPet={this.props.interestedPet} notes={this.props.notes} updateNotes={this.updateNotes} /> : null}

                </React.Fragment >
            )
        } else {
            return (
                <p>Just wait...</p>
            )
        }
    }
}