import { registerStudentService } from "../services/studentRegisterService.js";

export const registerStudent= async (req, res, next) => {
    try {
        const { name, age, email, password }= req.body;
        const student= await registerStudentService({ name, age, email, password});
        res.status(201).json({
            statusCode: 201,
            message: 'Student added successfully',
            payload: student
        });
    } catch (error) {
        next(error);
    }
};