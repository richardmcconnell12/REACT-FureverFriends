import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PetList from './Pets/PetList'
import PetInterest from './Pets/PetInterest'
import dbCalls from '../modules/dbCalls'
import Login from './Authorization/Login'
import Register from './Authorization/Register'

const remoteURL = "http://localhost:5002"
const usersURL = `${remoteURL}/users`
export default class ApplicationViews extends Component {

    state = {
        pets: [],
        users: [],
        sessionId: sessionStorage.getItem("userId")
    }

    // getUserData() {
    //     console.log("didmount fired up")
    //     const newState = {};
    //     let sessionId = sessionStorage.getItem("userId")
    //     dbCalls
    //         .all(`http://localhost:5002/petInterested?userId=${sessionId}`)
    //         .then(petInterested => (newState.petInterested = petInterested))
    //         .then(() => fetch(`http://localhost:5002/pets?userId=${sessionId}`).then(r => r.json()))
    //         .then(pets => (newState.pets = pets))
    //         .then(() => fetch(`http://localhost:5002/users?userId=${sessionId}`).then(r => r.json()))
    //         .then(users => (newState.users = users))
    //         .then(() => this.setState(newState))
    // }
    // componentDidMount() {
    //     dbCalls.getOnePet()
    //         .then(pets =>
    //             this.setState({
    //                 pets: pets
    //             }));
    // }


    updateComponent = () => {

        dbCalls.getUsers().then(allUsers => {
            this.setState({ users: allUsers });
            console.log(allUsers)
            // add users here
        })
    }
    addUser = (user) => dbCalls.post(user, usersURL)
        .then(() => dbCalls.all(usersURL))
        .then(Allusers => this.setState({
            users: Allusers             //added this three line of codes today to set the new user.
        }))

    componentDidMount() {
        console.log("didmount fired up")
        const newState = {};
        let sessionId = sessionStorage.getItem("userId")
        dbCalls
            .all(`http://localhost:5002/pets?${sessionId}`)
            .then(pets => (newState.pets = pets))
            .then(() => fetch(`http://localhost:5002/petInterested?${sessionId}`).then(r => r.json()))
            .then(petInterested => (newState.petInterested = petInterested))
            .then(() => fetch(`http://localhost:5002/users?${sessionId}`).then(r => r.json()))
            .then(users => (newState.users = users))
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={(props) => {
                    return <Login {...props}
                        users={this.state.users}
                        updateComponent={this.updateComponent} />
                }} />

                <Route path="/register" render={(props) => {
                    return <Register {...props}
                        users={this.state.users}
                        addUser={this.addUser} />
                }} />

                <Route exact path="/pets" render={(props) => {
                    return <PetList pets={this.state.pets} {...props} />
                }} />

                {/* <Route path="/pet-interested" render={(props) => {
                    return <PetInterest interestedPet={this.state.interestedPet} {...props} />
                }} /> */}
            </React.Fragment>
        )
    }
}
