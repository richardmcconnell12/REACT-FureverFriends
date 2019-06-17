import React, { Component } from 'react'
import NoteItem from './NoteItem'

export default class NoteList extends Component {
    render() {
        return (

            <div className="int-notes" >
                <React.Fragment>
                    {
                        this.props.notes.map(note => {
                            return <NoteItem key={note.id} interestedPet={this.props.interestedPet}
                                deleteInterestedPet={this.props.deleteInterestedPet}
                                deleteNote={this.props.deleteNote}
                                updateNotes={this.props.updateNotes}
                                notes={this.props.notes}
                            />
                        })
                    }
                </React.Fragment>
            </div>
        )
    }
}
