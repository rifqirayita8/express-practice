import { createStudent } from "../repositories/studentRepository.js";
import { ValidationError } from "../utils/customErrors.js";
import { validateStudentData } from "../validations/studentValidation.js";

export const createStudentService= async (studentData) => {
    try {
        validateStudentData(studentData);
    } catch(validationError) {
        const errorMessages= validationError.errors.map(err => err.message).join(',');
        throw new ValidationError(`Validation rusak: ${errorMessages}`);
    }
    return await createStudent(studentData);
}