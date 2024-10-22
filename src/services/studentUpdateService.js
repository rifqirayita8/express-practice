import { updateStudentById } from "../repositories/authRepository.js";
import { validateUpdateData } from "../validations/studentUpdateValidation.js";
import { ValidationError } from "../utils/customErrors.js";

export const updateDataService= async (id, updateData) => {
    try {
        validateUpdateData(updateData);

        const updatedStudent= await updateStudentById(id, updateData);
        return updatedStudent;
    } catch(e) {
        throw new ValidationError(e.message);
    }
}