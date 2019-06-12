import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';
import dbCalls from '../../modules/dbCalls'

export default class PetInterest extends Component {

    state = {
        // interestedPets: [],
        // sessionId: sessionStorage.getItem("userId")
    }

    // componentDidMount = () => {
    //     dbCalls.getInterestedPets(this.state.sessionId).then(interestedPets => {
    //         console.log("this guy is interested", this.state.sessionId)
    //         console.log("in these dogs", interestedPets)
    //         this.setState({ interestedPets })
    //     })
    // }

    render() {

        return (
            <div className="int-pets" >
                <React.Fragment>
                    <Card className="pet-interest">
                        {
                            this.props.userInterested.map(intPet => {
                                return <PetInterestCard key={intPet.petId} interestedPet={intPet}
                                    deleteInterestedPet={this.props.deleteInterestedPet}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
