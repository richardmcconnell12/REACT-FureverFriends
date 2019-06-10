const remoteURL = "http://localhost:5002"
const usersURL = `${remoteURL}/users`

export default Object.create(null, {
    get: {
        value: function (URL, id) {
            return fetch(`${URL}/${id}`).then(e => e.json())
        }
    },

    all: {
        value: function (URL) {
            console.log("url", URL)
            return fetch(`${URL}`).then(e => e.json())
        }
    },

    post: {
        value: function (newObj, URL) {
            return fetch(`${URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObj)
            }).then(data => data.json())
        }
    },

    getOnePet() {
        return fetch("http://api.petfinder.com/pet.get?format=json&key=63e9b58195bd675faaaabb6808eabdb5&id=24844854")
            .then(e => e.json())
    },

    getUsers: {
        value: function (sessionId) {
            return fetch(`http://localhost:5002/users?userId=${sessionId}`).then(e => e.json());
        }
    },

    getAllUsers: {
        value: function () {
            return fetch(`${remoteURL}/users`).then(e => e.json());
        },
        postUser: {
            value: function (newUser) {
                return fetch(`${remoteURL}/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                }).then(data => data.json())
            }
        }
    }
})