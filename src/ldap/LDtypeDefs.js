export const ldTypeDef = `
input LoginInput {
    email: String!
    password: String!
}
input UserInput {
    uname: String!
    surname: String!
    email: String!
    passw: String!
}`;

export const ldQueries = `
`;

export const ldMutations = `
    loginUser(credentials: LoginInput!): String!
    loginAdmin(credentials: LoginInput!): String!
    createUser(user: UserInput!): User!
    createAdmin(user: UserInput!): User!
`;