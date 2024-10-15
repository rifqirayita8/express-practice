import { loginStudentService } from "../services/studentLoginService.js";

export const loginStudent= async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result= await loginStudentService({ email, password });
        res.status(200).json({
            statusCode: 200,
            message: 'Login success',
            payload: result
        });
    } catch(error) {
        next(error);
    }
}