import { deleteStudentService } from "../../services/studentDeleteService.js";

export const deleteStudentController= async (req, res, next) => {
    const id= parseInt(req.params.id);
    const deletedStudent= await deleteStudentService(id);

    try {
        if (!deletedStudent) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Student not found'
            });
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Student deleted successfully',
            payload: deletedStudent
        });
    } catch(e) {
        next(e);
    }
}