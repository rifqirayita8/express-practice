import { readStudent } from "../repositories/authRepository.js";
import { NotFoundError } from "../utils/customErrors.js";

export const readDataService= async () => {
    try {
        const students= await readStudent();
        return students;
    } catch(err) {
        throw new NotFoundError('Error reading student data');
    }
}