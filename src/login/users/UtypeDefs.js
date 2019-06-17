export const usersTypeDef = `
type User {
    id: Int!
    names: String!
    surnames: String!
    username: String!
    passw: String!
}
input UserInput {
    names: String!
    surnames: String!
    username: String!
    passw: String!
}`;

export const usersQueries = `
    getUsers: [User]!
    userById(id: Int!): User!
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    deleteUser(id: Int!): Int!
    updateUser(id: Int!, User: UserInput!): User!
`;