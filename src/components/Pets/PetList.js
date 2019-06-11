import React, { Component } from 'react'
import PetCard from "./PetCard"
import Card from '@material-ui/core/Card';
import "./Pet.css"


class PetList extends Component {

    render() {
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
