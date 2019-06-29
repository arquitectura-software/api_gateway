export const ldTypeDef = `
type response {
    success: String!
    data: String!
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


export const ldQueries = `
`;

export const ldMutations = `
    loginUser(credentials: LoginInput!): String!
    loginAdmin(credentials: LoginInput!): String!
    createUser(user: UserInput2!): reponse!
    createAdmin(user: UserInput2!): response!
`;