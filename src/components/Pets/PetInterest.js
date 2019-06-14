import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';
import dbCalls from '../../modules/dbCalls'
// import dbCalls from '../../modules/dbCalls'

export default class PetInterest extends Component {

    state = {
        // interestedPets: [],
        // sessionId: sessionStorage.getItem("userId")

    }

    componentDidMount() {
        dbCalls.getAllNotes()
            .then((notes) => this.setState({ notes }))
    }

    render() {

        return (
            <div className="int-pets" >
                <React.Fragment>
                    <Card className="pet-interest">
                        {
                            this.props.userInterested.map(intPet => {
                                return <PetInterestCard key={intPet.petId} interestedPet={intPet}
                                    deleteInterestedPet={this.props.deleteInterestedPet}
                                    updateNotes={this.props.updateNotes}
                                    notes={this.props.notes}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
