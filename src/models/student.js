import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Student= sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Student;

