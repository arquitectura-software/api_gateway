export const destinationsTypeDef = `
type Destination {
    id: Int!
    name: String!
    weather: String!
    description: String!
    timezone: String!
    landingtime: String!
    boardingtime: String!
}
input DestinationInput {
    name: String!
    weather: String!
    description: String!
    timezone: String!
    landingtime: String!
    boardingtime: String!
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