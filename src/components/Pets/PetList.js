import React, { Component } from 'react'
import PetCard from "./PetCard"
import dbCalls from '../../modules/dbCalls';
import Grid from '@material-ui/core/Grid'
import "./Pet.css"


class PetList extends Component {

    addInterestedPet = (petsId) => {
        const interestedPet = {
            userId: parseInt(sessionStorage.getItem("userId")),
            petId: petsId.$t
        }
        dbCalls.postInterestedPet(interestedPet)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Welcome</h3>
                <Grid
                    container
                    wrap="wrap"
                    direction="row"
                    spacing={3}
                    justify="center"
                    alignItems="stretch"
                >
                    {this.props.pets.map(pet => (
                        <Grid item md={4} sm={4} key={pet.id.$t}>
                            <PetCard pet={pet}
                                addInterestedPet={this.addInterestedPet}
                                sessionId={this.props.sessionId}
                            />
                        </Grid>
                    ))}

                </Grid>
            </React.Fragment >
        )
    }
}

export default PetList
