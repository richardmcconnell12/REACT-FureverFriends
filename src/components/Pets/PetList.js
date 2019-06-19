import React, { Component } from 'react'
import PetCard from "./PetCard"
import Card from '@material-ui/core/Card';
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
                <Grid
                    container
                    wrap="wrap"
                    direction="row"
                    spacing={3}
                    justify="center"
                    alignItems="stretch"
                >
                    {this.props.pets.map(pet => (
                        <Grid item md={4} sm={4}>
                            <PetCard key={pet.id.$t} pet={pet}
                                addInterestedPet={this.addInterestedPet}
                            />
                        </Grid>
                    ))}

                </Grid>
            </React.Fragment >
        )
    }
}

export default PetList
