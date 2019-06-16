export const passengersTypeDef = `
type Passenger {
    id: Int!
    id_user: Int!
    birthdate: String!
    email: String!
    phone: Int!
}
input PassengerInput {
    id_user: Int!
    birthdate: String!
    email: String!
    phone: Int!
}`;

export const passengersQueries = `
    getPassengers: [Passenger]!
    passengerById(id: Int!): Passenger!
`;

export const passengersMutations = `
    createPassenger(passenger: PassengerInput!): Passenger!
    deletePassenger(id: Int!): Int!
    updatePassenger(id: Int!, passenger: PassengerInput!): Passenger!
`;