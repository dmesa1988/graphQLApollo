const resolvers = {
    Query: {
        users: (parent, args, { models }) => models.users,
        user: (parent, { id }, { models }) => {
            const user = models.users.filter(user => user.id === id)
            return user
        },
        me: (parent, args, { models }) => {
            return models.users[0]
        }
    },
    Mutation: {
        makeUser: (parent, { id, name }, { models }) => {
            const user = {
                id,
                name
            }
            models.users.push(user)
            return user
        },
        removeUser: (parent, { id }, { models }) => {
            let found = false
            models.users = models.users.filter(user => {
                if (user.id === id) {
                    found = true
                }
                else {
                    return user
                }
            })
            return found
        }
    },
    User: {
        cars: (parent, args, { models }) => models.cars.filter(car => car.ownedBy === parent.id)
    }
};

module.exports = resolvers;