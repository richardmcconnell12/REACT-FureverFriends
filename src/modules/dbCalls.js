const remoteURL = "http://localhost:5002"
const apiURL = "http://api.petfinder.com"
const apiKey = "63e9b58195bd675faaaabb6808eabdb5"

export default {

    // LOCAL DATABASE CALLS
    getUser(sessionId) {
        return fetch(`${remoteURL}/users?userId=${sessionId}`).then(e => e.json());
    },

    getAllUsers() {
        return fetch(`${remoteURL}/users`).then(e => e.json());
    },

    postUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },

    postInterestedPet(interestedPet) {
        return fetch(`${remoteURL}/userInterested`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestedPet)
        })
    },

    removeInterestedPet(id) {
        return fetch(`${remoteURL}/userInterested/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(e => e.json())
    },

    getInterestedPets(sessionId) {
        return fetch(`${remoteURL}/userInterested?userId=${sessionId}`)
            .then(e => e.json())
    },

    getOneInterestedPet(petId) {
        return fetch(`${remoteURL}/userInterested?petId=${petId}`)
    },

    postNote(newNoteObj) {
        return fetch(`${remoteURL}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNoteObj)
        })
    },

    removeNote(id) {
        return fetch(`${remoteURL}/notes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e => e.json())
    },

    getAllNotes(sessionId) {
        return fetch(`${remoteURL}/notes?userId=${sessionId}`)
            .then(e => e.json())
    },

    getOneNote(id) {
        return fetch(`${remoteURL}/notes?notes=${id}`)
            .then(e => e.json())
    },

    // API FETCH CALLS
    getOnePet(id) {
        return fetch(`${apiURL}/pet.get?format=json&key=${apiKey}&id=${id}`)
            .then(e => e.json())
    },

    getAllPets() {
        return fetch(`${apiURL}/pet.find?format=json&key=${apiKey}&animal=dog&location=37011`)
            .then(e => e.json())
            .then(pets => pets.petfinder.pets.pet)
    }


}