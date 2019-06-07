import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PetList from './Pets/PetList'
import dbCalls from '../modules/dbCalls'
import Login from './Authorization/Login'

export default class ApplicationViews extends Component {

    state = {
        pets: []
    }

    getOnePet = () => {
        dbCalls.getOnePet()
            .then(pets =>
                this.setState({
                    pets: pets
                }));
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={(props) => {
                    return <Login {...props}
                        users={this.state.users}
                        updateComponent={this.updateComponent} />
                }} />

                <Route exact path="/pets" render={(props) => {
                    return <PetList pets={this.state.pets} {...props} />
                }} />

                {/* <Route path="/pet-interested" render={(props) => {
                    return <PetInterest animal
                }} */}
            </React.Fragment>
        )
    }
}
