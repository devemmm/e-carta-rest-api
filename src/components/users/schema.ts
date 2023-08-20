'use strict'

import { Model, DataTypes, Optional, Sequelize } from "sequelize" 
import db from "../../config/db"


interface UserAttributes{
    id?: number,
    fname: string,
    lname: string,
    email: string,
    country: string,
    phone: string,
    dob: string,
    password: string
}
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

const sequelize = new Sequelize('mysql://openmrs:Openmrs@2022@localhost:3306/ecarta');

class User extends Model<UserAttributes, UserCreationAttributes>{}

        User.init({
            id: {
                type: DataTypes.NUMBER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            fname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dob: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {sequelize, modelName: "User", tableName: 'User'})

export default User;
