import bcrypt from "bcrypt";
import { 
    registerStudent, 
    findStudentByEmail 
} from "../repositories/authRepository.js";
import { ValidationError } from "../utils/customErrors.js";
import { validateRegisterData } from "../validations/studentRegisterValidation.js";

export const registerStudentService= async (studentData) => {
    try {
        validateRegisterData(studentData);

        const existingStudent= await findStudentByEmail(studentData.email);
        if (existingStudent) {
            throw new ValidationError('Email already taken');
        }
        
        const hashedPassword= await bcrypt.hash(studentData.password, 12);
        studentData.password= hashedPassword;

        return await registerStudent(studentData);
    } catch(validationError) {
        if (validationError.errors) {
            const errorMessages= validationError.errors.map(err => err.message).join(', ');
            throw new ValidationError(`Validation rusak: ${errorMessages}`);
        } else {
            throw new ValidationError(`Validation rusak2: ${validationError.message}`);
        }
    }
}