import { BaseDataBase } from "./BaseDataBase"

class Migrations extends BaseDataBase {

    async createTable() {
        await this.getConnection().raw(`
            create table Cubo_User(
                id VARCHAR(255) PRIMARY KEY,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                participation FLOAT
            );
        `)
        console.log("Table created successfully")
    }
}

const createTableMigration = new Migrations()
createTableMigration.createTable()