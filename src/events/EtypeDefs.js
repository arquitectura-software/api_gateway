export const eventsTypeDef = `
type Event {
    id: Int!
    name: String!
    location: String!
    date: String!
    capacity: Int!
    audence: String!
    description: String!
    tipo: String!
}
input EventInput {
    name: String!
    location: String!
    date: String!
    capacity: Int!
    audence: String!
    description: String!
    tipo: String!
    }`;

export const eventsQueries = `
    getEvents: [Event]!
`;

export const eventsMutations = `
    createEvent(event: EventInput!): Event!
    deleteEvent(event: Int!): Int
    updateEvent(event: Int!, event: EventInput!): Event!
`;