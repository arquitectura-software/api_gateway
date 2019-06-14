export const ldTypeDef = `
input LoginInput {
    username: String!
    password: String!
}`;

export const ldQueries = `
`;

export const ldMutations = `
    login(credentials: LoginInput!): String!
`;