import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet"
import { UserInput, UserInsert } from "../model/User"
import { UserDataBase } from "../data/UserDataBase"
import  IdGenerator  from "../services/IdGenerator"

export class UserBusiness {

    async enteringUser(input: UserInput) {

        if (input.participation === 0) {
            throw new Error("participation can't be zeor")
        }

        if (!input.firstName || !input.lastName || !input.participation) {
            throw new MissingFieldsToComplet()
        }

        const user: UserInsert = {
            id: IdGenerator.generate(),
            ...input
        }

        const userDataBase = new UserDataBase()

        const result = await userDataBase.insertUser(user)

        return result
    }

    async allUser() {

        const userDataBase = new UserDataBase()
        
        const result = await userDataBase.getAllUsers()

        return result
    }
}