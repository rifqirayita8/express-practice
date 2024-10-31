import { readStudent } from "../repositories/authRepository.js";
import { NotFoundError } from "../utils/customErrors.js";

export const readDataService= async (offset, limit) => {
    try {
        const students= await readStudent(offset, limit);
        return students;
    } catch(err) {
        throw new NotFoundError('Error reading student data');
    }
}