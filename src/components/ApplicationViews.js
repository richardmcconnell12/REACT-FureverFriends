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

    addUser = (user) => dbCalls.postUser(user, usersURL)
        .then(userResult => sessionStorage.setItem("userId", userResult.id))
        .then(() => dbCalls.getAllUsers(usersURL))
        .then(Allusers => this.setState({
            users: Allusers
        }))

    componentDidMount() {
        dbCalls.getAllPets()
            .then((pets) => this.setState({ pets }))
            .then(() => dbCalls.getAllUsers())
            .then(users => this.setState({ users }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" render={(props) => {
                    return <Login {...props}
                        users={this.state.users}
                        updateComponent={this.updateComponent} />
                }} />

                <Route path="/register" render={(props) => {
                    return <Register {...props}
                        users={this.state.users}
                        addUser={this.addUser} />
                }} />

                <Route path="/pets" render={(props) => {
                    return <PetList pets={this.state.pets} {...props}
                    />
                }} />

                <Route path="/pet-interested" render={(props) => {
                    return <PetInterest sessionId={this.state.sessionId} {...props}
                        userInterested={this.state.userInterested}
                    />
                }} />
            </React.Fragment>
        )
    }
}
