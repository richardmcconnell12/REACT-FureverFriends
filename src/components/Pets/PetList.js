import React, { Component } from 'react'
import PetCard from "./PetCard"
import Card from '@material-ui/core/Card';
import "./Pet.css"


class PetList extends Component {


    componentDidMount() {

    }


    render() {
        console.log(this.props.pets)
        let pets = this.props.pets["petfinder"];
        // console.log("PETS", pets.pet)
        for (let key in pets) {
            console.log("key", key, pets[key]["name"])
            console.log("age", key, pets[key]["age"])
            console.log("breed", key, pets[key]["breeds"])
            console.log("description", key, pets[key]["description"])

        }
        return (
            <React.Fragment>
                <Card className="pets">
                    {/* {
                        this.props.pets.map(pet => {
                            return <PetCard key={this.props.petfinder.pet} pet={pet}
                            />
                        })
                    } */}
                </Card>
            </React.Fragment>
        )
    }
}

export default PetList
