import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';

let interestedPet
export default class PetInterest extends Component {

    state = {
        interested: false
    }


    render() {
        return (
            <div>
                <React.Fragment>
                    <Card className="pet-interest">
                        {
                            this.props.pets.map(pet => {
                                return <PetInterestCard key={pet.id.$t} interestedPet={interestedPet}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
