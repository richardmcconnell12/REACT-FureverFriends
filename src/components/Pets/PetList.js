import React, { Component } from 'react'
import PetCard from "./PetCard"
import Card from '@material-ui/core/Card';
import "./Pet.css"


class PetList extends Component {

    render() {
        // let allPets = []
        // // console.log("come on, gotta dig deeper", pets)
        // for (let key in this.props.pets) {
        //     // console.log("key", key)
        //     if (this.props.pets[key]["pet"]) {
        //         console.log("pet", this.props.pets[key]["pet"])
        //         allPets = this.props.pets[key]["pet"];
        //     }


        // }
        // // console.log("props", this.props.pets)
        // allPets.map(pet => {
        //     // for (let key in pet.name) {
        //     //     console.log("petkey", pet.name[key])
        //     // }
        //     Object.values(pet)
        //     console.log("alll", pet)

        // })
        console.log("props", this.props.pets)
        return (
            <React.Fragment>
                <Card className="pets">
                    {
                        this.props.pets.map(pet => {
                            return <PetCard key={pet.id.$t} pet={pet}
                            />
                        })
                    }
                </Card>
            </React.Fragment>
        )
    }
}

export default PetList
