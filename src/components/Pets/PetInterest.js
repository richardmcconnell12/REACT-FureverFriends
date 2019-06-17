import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';

export default class PetInterest extends Component {

    state = {
        // interestedPets: [],
        // sessionId: sessionStorage.getItem("userId")
        // notes: []

    }

    render() {

        return (
            <div className="int-pets" >
                <React.Fragment>
                    <Card className="pet-interest">
                        {
                            this.props.userInterested.map(intPet => {
                                return <PetInterestCard key={intPet.petId} interestedPet={intPet}
                                    sessionId={this.props.sessionId}
                                    deleteInterestedPet={this.props.deleteInterestedPet}
                                    updateNotes={this.props.updateNotes}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
