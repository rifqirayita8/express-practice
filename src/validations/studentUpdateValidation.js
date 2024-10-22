import { z } from 'zod';

const updateSchema= z.object({
    name: z.string().min(1, {message: 'Name is required'}),
    age: z.number().int().positive({message: 'Age is required'}),
    email: z.string().email({message: 'Invalid email address'}),
});

export const validateUpdateData= (data) => {
    return updateSchema.parse(data);
}