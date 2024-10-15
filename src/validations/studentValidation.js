import { z } from 'zod';

const studentSchema= z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    age: z.number().int().positive({message: 'Age is required'}),
    email: z.string().email({message: 'Invalid email address'})
});

export const validateStudentData= (data) => {
    return studentSchema.parse(data);
};