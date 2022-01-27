export class User {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number
    ) {}

    static userModel(user: User) {
        return new User(user.id, user.firstName, user.lastName, user.participation)
    }
}

export interface UserInput {
    firstName: string,
    lastName: string,
    participation: number
}

export interface UserInsert extends UserInput {
    id: string
}