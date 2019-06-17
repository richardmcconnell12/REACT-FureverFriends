import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';
import dbCalls from '../../modules/dbCalls'
// import dbCalls from '../../modules/dbCalls'

export default class PetInterest extends Component {

    state = {
        // interestedPets: [],
        // sessionId: sessionStorage.getItem("userId")
        // notes: []

    }


    componentDidMount() {
        // dbCalls.getAllNotesByUserAndPet(this.props.sessionId, this.props.interestedPet.petId)
        //     .then(notes => this.setState({ notes: notes }))
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
                                // notes={this.state.notes}
                                // deleteNote={this.props.deleteNote}
                                />
                            })
                        }
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
