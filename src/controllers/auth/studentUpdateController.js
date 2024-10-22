import { updateDataService } from "../../services/studentUpdateService.js";

export const updateStudentController= async (req, res, next) => {
    try {
        const studentId= parseInt(req.params.id);
        const updateData= req.body;

        const updatedStudent= await updateDataService(studentId, updateData);

        if (!updatedStudent) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Student not found'
            })
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Student updated successfully',
            payload: updatedStudent
        });
    } catch(e) {
        next(e);
    }
}