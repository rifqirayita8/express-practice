import { loginStudentService } from "../services/studentLoginService.js";

export const loginStudent= async (req, res, next) => {
    try {
        const { token, user }= await loginStudentService(req.body);
        res.status(200).json({
            statusCode: 200,
            message: 'Login success',
            payload: {
                token,
                user,
            }
        });
    } catch(error) {
        next(error);
    }
}