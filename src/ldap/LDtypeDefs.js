export const ldTypeDef = `
type User2 {
    id: Int!
    uname: String!
    surname: String!
    email: String!
    passw: String!
}
input UserInput2 {
    uname: String!
    surname: String!
    email: String!
    passw: String!
}
input LoginInput {
    email: String!
    password: String!
}`;
/*export const ldTypeDef2 = `
type User {
    id: Int!
    uname: String!
    surname: String!
    email: String!
    passw: String!
}
input UserInput {
    uname: String!
    surname: String!
    email: String!
    passw: String!
}`;*/

export const ldQueries = `
`;

export const ldMutations = `
    loginUser(credentials: LoginInput!): String!
    loginAdmin(credentials: LoginInput!): String!
    createUser(user: UserInput2!): User2!
    createAdmin(user: UserInput2!): User2!
`;