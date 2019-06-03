export const destinationsTypeDef = `
type Destination {
    id: Int!
    name: String!
    weather: String!
    description: String!
    timezone: String!
    landingtime: DateTime!
    boardingtime: DateTime!
}
input DestinationInput {
    name: String!
    weather: String!
    description: String!
    timezone: String!
    landingtime: DateTime!
    boardingtime: DateTime!
    }`;

export const destinationsQueries = `
    getDestinations: [Destination]!
    destinationById(id: Int!): Destination!
`;

export const destinationsMutations = `
    createDestination(Destination: DestinationInput!): Destination!
    deleteDestination(id: Int!): Int
    updateDestination(id: Int!, Destination: DestinationInput!): Destination!
`;