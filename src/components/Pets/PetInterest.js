import React, { Component } from 'react'
import PetCard from './PetInterestCard'
import Card from '@material-ui/core/Card';
import dbCalls from '../../modules/dbCalls'

export default class PetInterest extends Component {

    state = {
        interestedPets: [],
        sessionId: sessionStorage.getItem("userId")
    }

    componentDidMount = () => {
        dbCalls.getInterestedPets(this.state.sessionId).then(interestedPets => {
            console.log("this guy is interested", this.state.sessionId)
            console.log("in these dogs", interestedPets)
            this.setState({ interestedPets })
        })
    }

    render() {
        return (
            <div className="int-card">
                <Card className="pet-interest">
                    {
                        this.state.interestedPets.map(intPet => {
                            return <PetCard key={intPet.$t} interestedPets={intPet}
                                getInterestedPets={this.props.getInterestedPets}
                            />
                        })
                    }
                </Card>
            </div>
        )
    }
}
