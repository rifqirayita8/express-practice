import { deleteStudentById } from "../repositories/authRepository.js";
import { ValidationError } from "../utils/customErrors.js";

export const deleteStudentService= async (id) => {
    try {
        const deletedStudent= await deleteStudentById(id);
        return deletedStudent;
    } catch(e) {
        throw new ValidationError(e.message);
    }
}