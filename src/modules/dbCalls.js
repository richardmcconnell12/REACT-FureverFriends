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
        return fetch(`${remoteURL}/petInterested`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestedPet)
        })
    },

    getInterestedPets() {
        return fetch(`${remoteURL}/petInterested`).then(e => e.json())
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