import React, { Component } from 'react'
import PetCard from "./PetCard"
import Card from '@material-ui/core/Card';
import dbCalls from '../../modules/dbCalls'
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
                <Card className="pets">
                    {
                        this.props.pets.map(pet => {
                            return <PetCard key={pet.id.$t} pet={pet}
                                addInterestedPet={this.addInterestedPet}
                            />
                        })
                    }
                </Card>
            </React.Fragment>
        )
    }
}

export default PetList
