import React, { Component } from "react";
import { Button, CardActions, CardContent, CardHeader, Card, CardMedia, Typography, Grid } from '@material-ui/core';

export default class PetCard extends Component {

    state = {
        interestDisabled: false
    }

    render() {
        return (
            <div key={this.props.pet.id.$t} className="card">
                <React.Fragment>
                    <Grid container direction="row">
                        <Card style={{
                            maxWidth: 300
                        }}>
                            <CardHeader title={this.props.pet.name.$t} />
                            <CardMedia style={{ height: 250, width: 250, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} image={this.props.pet.media.photos.photo[3].$t}
                                title={this.props.pet.name.$t}>
                            </CardMedia>
                            {/* <div style={{
                            backgroundImage: `url(${this.props.pet.media.photos.photo[3].$t})`,
                            width: "240px",
                            height: "316px",
                            backgroundSize: "240px 316px"
                        }}></div> */}
                            {/* <img src={this.props.pet.media.photos.photo[3].$t} alt="pet-img"></img> */}
                            <CardContent>
                                <Typography variant="body2" color="textPrimary" component="p">{this.props.pet.breeds.breed.$t}</Typography>
                                <Typography variant="body2" color="textPrimary" component="p"> {this.props.pet.description.$t} </Typography>
                            </CardContent>
                            <CardActions>
                                <Button type="button"
                                    className="btn-interested"
                                    onClick={() => {
                                        this.props.addInterestedPet(this.props.pet.id)
                                        this.setState({ interestDisabled: true })
                                    }}
                                    disabled={this.state.interestDisabled}
                                >Interested!
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </React.Fragment >
            </div >
        )
    }
}