import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';

export default class PetCard extends Component {

    render() {
        const myPet = this.props.interestedPets.petfinder.pet
        return (
            <div key={this.props.interestedPets.id} className="int-card">

                <Card className="card-body">
                    <CardContent> <h3>{myPet.name.$t} </h3></CardContent>
                    <img src={myPet.media.photos.photo[3].$t} alt="pet-img"></img>
                    <Typography variant="body2" color="textPrimary" component="p">{myPet.breeds.breed.$t}</Typography>
                    <button type="button"
                        className="btn-unInterested"
                        onClick={() => {
                            this.props.addInterestedPet(this.props.pet.id.$t)
                        }}>
                        Sorry, buddy....
                    </button>
                </Card>

            </div >
        )
    }
}