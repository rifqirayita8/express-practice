import { readDataService } from "../services/studentReadDataService.js";

export const readDataController= async (req, res, next) => {
    try {
        const studentNames= await readDataService();
        res.json(studentNames);
    } catch(err) {
        next(err);
    }
}