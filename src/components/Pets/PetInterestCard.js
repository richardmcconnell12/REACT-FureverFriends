import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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
                    <Card className="card-body">
                        <CardContent> <h3>{this.state.myPet.name.$t} </h3></CardContent>
                        <div style={{
                            backgroundImage: `url(${this.state.myPet.media.photos.photo[3].$t})`,
                            width: "240px",
                            height: "316px",
                            backgroundSize: "240px 316px"
                        }}></div>
                        <Typography variant="body2" color="textPrimary" component="p">{this.state.myPet.breeds.breed.$t}</Typography>
                        <button type="button"
                            className="btn-unInterested"
                            onClick={() => {
                                this.props.deleteInterestedPet(this.props.interestedPet.id)
                            }}>
                            Sorry, buddy....
                        </button>
                        <button type="button"
                            className="open-modal"
                            onClick={() => {
                                this.showModalVis("addModalVis")
                            }}>
                            Add a note!
                            </button>
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