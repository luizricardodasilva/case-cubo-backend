import { BaseDataBase } from "./BaseDataBase"
import { User, UserInsert } from "../model/User"

export class UserDataBase extends BaseDataBase {

    private static TABLE_NAME = "Cubo_User"

    async insertUser(user: UserInsert): Promise<string> {
        try {
            await this.getConnection().insert(user).into(UserDataBase.TABLE_NAME)

            return "User created successfully"

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async getAllUsers() {
        try {
            const result: User[] = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)

            const users = result.map((user) => {
                return User.userModel(user)
            })

            return users

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }
} 