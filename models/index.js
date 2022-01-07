let users = [
    {
        id: 1,
        name: 'Diego'
    },
    {
        id: 2,
        name: 'Aleja'
    },
    {
        id: 3,
        name: 'Cesar Felipe'
    },
    {
        id: 4,
        name: 'Alexa'
    },
]

let cars = [
    {
        id: 1,
        manufacturer: "Chevrolet",
        model: "Sprint",
        carClass: "Supermini",
        ownedBy: 1
    },
    {
        id: 2,
        manufacturer: "Ford",
        model: "Escape",
        carClass: "SUV",
        ownedBy: 3
    },
    {
        id: 3,
        manufacturer: "Renault",
        model: "Clio",
        carClass: "Supermini",
        ownedBy: 2
    },
    {
        id: 4,
        manufacturer: "Chevrolet",
        model: "Aveo",
        carClass: "Subcompact",
        ownedBy: 4
    },
    {
        id: 5,
        manufacturer: "Chevrolet",
        model: "Tracker",
        carClass: "SUV",
        ownedBy: 3
    },
    {
        id: 6,
        manufacturer: "Hyundai",
        model: "Tucson",
        carClass: "SUV",
        ownedBy: 3
    }
]

module.exports = { users, cars }
