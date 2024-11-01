import { readDataService } from "../services/studentReadDataService.js";

export const readDataController= async (req, res, next) => {
    try {
      const page= parseInt(req.query.page) || 1;
      const limit= 5;
      const offset= (page - 1) * limit;
        const studentNames= await readDataService(offset, limit);
        if (studentNames.length === 0) {
          return res.status(404).json({
            "message": 'No students found'
          });
        }
        res.json({
            "message": 'Students found',
            "payload": studentNames
        });
    } catch(err) {
        next(err);
    }
}