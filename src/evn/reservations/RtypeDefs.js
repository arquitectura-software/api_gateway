export const reservationsTypeDef = `
type Reservation {
    id: Int!
    quantity: Int!
    id_user: Int!
    id_event: Int!
}
input ReservationInput {
    quantity: Int!
    id_user: Int!
    id_event: Int!
}`;

export const reservationsQueries = `
    getReservations: [Event]!
    reservationById(id: Int!): Event!
`;

export const reservationsMutations = `
    createReservation(reservation: ReservationInput!): Reservation!
    deleteReservation(id: Int!): Int
    updateReservation(id: Int!, reservation: ReservationInput!): Reservation!
`;