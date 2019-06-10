import React, { Component } from "react"
import "./Login.css"

export default class Register extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        evt.preventDefault(); // added evt.preventDefault();
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    // Simplistic handler for login submit
    handleRegister = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and username that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({        //The JSON.stringify() method converts a JavaScript object or value to a JSON string, 
                name: this.state.email,
                email: this.state.password,
                // id: this.state.id
            })
        )
    }


    constructNewUser = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
            id: this.state.id
        }

        this.props.addUser(user).then(response => {
            console.log(response)
            this.props.history.push("/pets")
        })
    }

    render() {
        return (
            <section className="register">
                <form onSubmit={this.handleRegister}>

                    <h2>Sign up</h2>
                    <label htmlFor="inputEmail">
                    </label><br></br>
                    <input onChange={this.handleFieldChange} type="text"
                        id="email"
                        placeholder="Enter your Email"
                        required autoFocus="" />
                    <br></br>
                    <label htmlFor="inputEmail">
                    </label>
                    <br></br>
                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Enter your password"
                        required />
                    <br></br>

                    <button type="submit" onClick={() => this.constructNewUser()} className="btn btn-primary signIn">
                        Sign Up
                    </button>
                </form>
            </section>
        )
    }
}