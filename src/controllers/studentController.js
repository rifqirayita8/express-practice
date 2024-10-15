import { createStudentService } from "../services/studentService.js";

export const addStudent= async (req, res, next) => {
    try {
        const { name, age, email }= req.body;
        const student= await createStudentService({ name, age, email});
        res.status(201).json({
            statusCode: 201,
            message: 'Student added successfully',
            payload: student
        });
    } catch (error) {
        next(error);
    }
};