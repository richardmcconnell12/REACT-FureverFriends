import React, { Component } from 'react'
import PetInterestCard from './PetInterestCard'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import dbCalls from '../../modules/dbCalls';

export default class PetInterest extends Component {

    state = {
        userInterested: []
    }

    componentDidMount() {
        dbCalls.getInterestedPets(sessionStorage.getItem("userId"))
            .then((userInterested) => this.setState({ userInterested }))
    }

    deleteInterestedPet = (id) => {
        dbCalls.removeInterestedPet(id)
            .then(() => dbCalls.getInterestedPets(sessionStorage.getItem("userId")))
            .then(items => this.setState({ userInterested: items }))
    }


    render() {

        return (
            <div className="int-pets" >
                <React.Fragment>
                    <Grid
                        container
                        wrap="wrap"
                        direction="row"
                        spacing={3}
                        justify="center"
                        alignItems="stretch"
                    >
                        {this.state.userInterested.map(intPet => (
                            <Grid item md={4} sm={4}>
                                <PetInterestCard key={intPet.petId} interestedPet={intPet}
                                    sessionId={sessionStorage.getItem("userId")}
                                    deleteInterestedPet={this.deleteInterestedPet}
                                    updateNotes={this.props.updateNotes}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </React.Fragment>
            </div >
        )
    }
}
