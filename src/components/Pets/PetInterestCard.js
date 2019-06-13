import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import InterestedNotesModal from '../Notes/InterestedNotesModal'
import dbCalls from "../../modules/dbCalls"
import "./Pet.css"

export default class PetInterestCard extends Component {

    state = {
        // myPet: {}
        modalVis: false
    }

    componentDidMount() {
        dbCalls.getOnePet(this.props.interestedPet.petId)
            .then(result => this.setState({ myPet: result.petfinder.pet }))

    }

    changeModalVis = () => {
        this.setState({ modalVis: true })
    }

    closeModalVis = () => {
        this.setState({ modalVis: false })
    }

    render() {
        // const myPet = this.props.interestedPet.petfinder.pet;
        if (this.state.myPet) {
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
                    </Card>

                    {this.state.modalVis ? <InterestedNotesModal modalVis={this.state.modalVis} close={this.closeModalVis} /> : null}
                </React.Fragment>
            )
        } else {
            return (
                <p>Just wait...</p>
            )
        }
    }
}