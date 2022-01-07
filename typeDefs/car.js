const { gql } = require('apollo-server-express')

module.exports = gql`
    extend type Query {
        cars: [Car]
        car(id: Int!): Car
    }

    extend type Mutation {
        makeCar(id:Int!,manufacturer:String!,model:String!, carClass:String!): Car!
        removeCar(id:Int!): Boolean
    }

    type Car {
        id: ID!
        manufacturer: String!
        model: String!
        carClass: String
        owner: User!
    }
`