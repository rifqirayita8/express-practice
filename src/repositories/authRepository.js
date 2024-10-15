import Student from "../models/student.js";

export const registerStudent= async (studentData) => {
    return await Student.create(studentData);
};

export const loginStudent= async (email) => {
    return await Student.findOne({ where: { email } });
};