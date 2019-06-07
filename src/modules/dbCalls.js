export default {

    getOnePet() {
        return fetch("http://api.petfinder.com/pet.get?format=json&key=63e9b58195bd675faaaabb6808eabdb5&id=24844854")
            .then(e => e.json())
    }
}