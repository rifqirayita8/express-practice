import Student from "../models/student.js";

export const createStudent= async (studentData) => {
    return await Student.create(studentData);
};