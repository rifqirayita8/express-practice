import Student from "../models/student.js";

export const registerStudent= async (studentData) => {
    return await Student.create(studentData);
};

export const findStudentByEmail= async (email) => {
    return await Student.findOne({ where: { email } });
};

export const readStudent= async () => {
    const student= await Student.findAll();
    return student.map(student => student.name);
}