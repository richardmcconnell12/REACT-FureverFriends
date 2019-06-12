import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import dbCalls from "../../modules/dbCalls"
// import CardActions from '@material-ui/core/CardActions';

export default class PetInterestCard extends Component {
    // take relationship and call dbCall that gets one animalId based on relationship
    state = {
        // myPet: {}
    }

    componentDidMount() {
        dbCalls.getOnePet(this.props.interestedPet.petId)
            .then(result => this.setState({ myPet: result.petfinder.pet }))

    }

    render() {
        // const myPet = this.props.interestedPet.petfinder.pet;
        console.log("Pet Interest Card - one pet", this.props.interestedPet)
        console.log("my pet state", this.state.myPet)
        if (this.state.myPet) {
            return (
                <React.Fragment>
                    <Card className="card-body">
                        <CardContent> <h3>{this.state.myPet.name.$t} </h3></CardContent>
                        <img src={this.state.myPet.media.photos.photo[3].$t} alt="pet-img"></img>
                        <Typography variant="body2" color="textPrimary" component="p">{this.state.myPet.breeds.breed.$t}</Typography>
                        <button type="button"
                            className="btn-unInterested"
                            onClick={() => {
                                this.props.deleteInterestedPet(this.props.interestedPet.id)
                            }}>
                            Sorry, buddy....
                    </button>
                    </Card>
                </React.Fragment>
            )
        } else {
            return (
                <p>no pet for you</p>
            )
        }
    }
}