import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default class PetCard extends Component {

    state = {
        interestDisabled: false
    }

    render() {
        return (
            <div key={this.props.pet.id.$t} className="card">
                <React.Fragment>
                    <Card className="card-body">
                        <CardContent> <h3>{this.props.pet.name.$t} </h3></CardContent>
                        <img src={this.props.pet.media.photos.photo[3].$t} alt="pet-img"></img>
                        <Typography variant="body2" color="textPrimary" component="p">{this.props.pet.breeds.breed.$t}</Typography>
                        <Typography variant="body2" color="textPrimary" component="p"> {this.props.pet.description.$t} </Typography>
                        <button type="button"
                            className="btn-interested"
                            onClick={() => {
                                this.props.addInterestedPet(this.props.pet.id)
                                this.setState({ interestDisabled: true })
                            }}
                            disabled={this.state.interestDisabled}
                        >Interested!
                    </button>
                    </Card>

                </React.Fragment >
            </div >
        )
    }
}