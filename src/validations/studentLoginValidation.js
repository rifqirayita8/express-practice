import { z } from 'zod';

const loginSchema= z.object({
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(8, {message: 'Minimum of 8 characters required'}),
})

export const validateLoginData= (data) => {
    return loginSchema.parse(data);
}