import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import InterestedNotesModal from '../Notes/InterestedNotesModal'
import dbCalls from "../../modules/dbCalls"
import "./Pet.css"

export default class PetInterestCard extends Component {

    state = {
        myPet: {},
        modalVis: false
        // notes: []
    }

    componentDidMount() {
        dbCalls.getOnePet(this.props.interestedPet.petId)
            .then(result => this.setState({ myPet: result.petfinder.pet }))
        //     .then(() => dbCalls.getAllNotes(this.props.notes))
        //     .then(notes => this.setState({ notes: notes }))

    }

    changeModalVis = () => {
        this.setState({ modalVis: true })
    }

    closeModalVis = () => {
        this.setState({ modalVis: false })
    }

    render() {
        // const myPet = this.props.interestedPet.petfinder.pet;
        if ("age" in this.state.myPet) {
            return (
                <React.Fragment>
                    <Card className="card-body">
                        <CardContent> <h3>{this.state.myPet.name.$t} </h3></CardContent>
                        <img src={this.state.myPet.media.photos.photo[3].$t} className="pet-img" alt="pet-img"></img>
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
                            onClick={
                                this.changeModalVis
                            }>
                            Add a note!
                        </button>
                        <Typography variant="body2" color="textPrimary" component="p">{this.props.notes
                            .filter(note => note.petId === this.props.interestedPet.petId)
                            .map(note =>
                                note.note
                            )}</Typography>
                    </Card>

                    {this.state.modalVis ? <InterestedNotesModal modalVis={this.state.modalVis} close={this.closeModalVis} interestedPet={this.props.interestedPet} notes={this.state.notes} updateNotes={this.props.updateNotes} /> : null}
                </React.Fragment >
            )
        } else {
            return (
                <p>Just wait...</p>
            )
        }
    }
}