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
        userInterested: [],
        notes: [],
        sessionId: sessionStorage.getItem("userId")
    }

    addUser = (user) => dbCalls.post(user, usersURL)
        .then(() => dbCalls.all(usersURL))
        .then(Allusers => this.setState({
            users: Allusers             //added this three line of codes today to set the new user.
        }))

    componentDidMount() {
        dbCalls.getAllPets()
            .then((pets) => this.setState({ pets }))
            .then(() => dbCalls.getInterestedPets(this.state.sessionId))
            .then((userInterested) => this.setState({ userInterested }))
            .then(() => dbCalls.getAllUsers())
            .then(users => this.setState({ users }))
            .then(() => dbCalls.getAllNotes(this.state.sessionId))
            .then((notes) => this.setState({ notes }))


    }

    addInterestedPet = (petsId) => {
        const interestedPet = {
            userId: parseInt(sessionStorage.getItem("userId")),
            petId: petsId.$t
        }
        dbCalls.postInterestedPet(interestedPet)
            .then(() => dbCalls.getInterestedPets(this.state.sessionId))
            .then(items => this.setState({ userInterested: items }))
    }

    deleteInterestedPet = (id) => {
        dbCalls.removeInterestedPet(id)
            .then(() => dbCalls.getInterestedPets(this.state.sessionId))
            .then(items => this.setState({ userInterested: items }))
    }

    updateNotes = async () => {
        this.setState({ notes: await dbCalls.getAllNotes(this.state.sessionId) })
    }

    deleteNote = (id) => {
        dbCalls.removeNote(id)
            .then(() => dbCalls.getAllNotes(this.state.notes))
            .then(reply => this.setState({ notes: reply}))
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
                        addInterestedPet={this.addInterestedPet}
                    />
                }} />

                <Route path="/pet-interested" render={(props) => {
                    return <PetInterest sessionId={this.state.sessionId} {...props}
                        userInterested={this.state.userInterested}
                        deleteInterestedPet={this.deleteInterestedPet}
                        notes={this.state.notes}
                        updateNotes={this.updateNotes}
                        postNote={this.props.addNotes} />
                }} />
            </React.Fragment>
        )
    }
}
