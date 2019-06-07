import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';

export default class PetCard extends Component {

    render() {
        return (
            <div key={this.props.pet.id} className="card">

                <Card className="card-body">
                    <CardContent> <h3>{this.props.petfinder.pet.name} </h3></CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">{this.props.petfinder.breeds.breed}</Typography>
                    <Typography variant="body2" color="textPrimary" component="p"> {this.props.petfinder.description} </Typography>
                </Card>

            </div>
        )
    }
}