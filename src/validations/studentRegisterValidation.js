import { z } from 'zod';

const registerSchema= z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    age: z.number().int().positive({message: 'Age is required'}),
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(8, {message: 'Minimum of 8 characters required'}),
});

export const validateRegisterData= (data) => {
    return registerSchema.parse(data);
};