const resolvers = {
    Query: {
        cars: (parent, args, { models }) => models.cars,
        car: (parent, { id }, { models }) => {
            const car = models.cars.filter(car => car.id === id)
            return car[0]
        }
    },
    Mutation: {
        makeCar: (parent, { id, manufacturer, model, carClass }, { models }) => {
            const car = {
                id,
                manufacturer,
                model,
                carClass
            }
            models.cars.push(car)
            return car
        },
        removeCar: (parent, { id }, { models }) => {
            let found = false
            models.cars = models.cars.filter(car => {
                if (car.id === id) {
                    found = true
                }
                else {
                    return car
                }
            })
            return found
        }
    },
    Car: {
        owner: (parent, args, { models }) => models.users[parent.ownedBy - 1]
    }
};

module.exports = resolvers;