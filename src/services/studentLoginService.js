import bcrypt from 'bcrypt';
import { loginStudent } from '../repositories/authRepository.js';
import { ValidationError } from '../utils/customErrors.js';
import { validateLoginData } from '../validations/studentLoginValidation.js';
import { generateToken } from '../utils/jwt.js';

export const loginStudentService= async (loginData) => {
    try {
        validateLoginData(loginData);
    } catch(validationError) {
        const errorMessages= validationError.errors.map(err => err.message).join(', ');
        throw new ValidationError(`Validation rusak: ${errorMessages}`);
    }

    const user= await loginStudent(loginData.email);
    if (!user) {
        throw new ValidationError('Email belum terdaftar');
    }

    const isValidPassword= await bcrypt.compare(loginData.password, user.password);
    if (!isValidPassword) {
        throw new ValidationError('Password salah');
    }
    const token= generateToken(user);
    return { token, user };
}