import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';

export default class PetInterest extends Component {


    render() {
        return (
            <div>
                <React.Fragment>
                    <Card className="pet-interest">
                        {
                            this.props.interestedPets.map(intPet => {
                                return <PetInterestCard key={intPet.id.$t} interestedPet={intPet}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
