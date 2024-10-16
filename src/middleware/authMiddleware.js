import { verifyToken } from "../utils/jwt.js";

export const authenticate= async (req, res, next) => {
    const token= req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ status: 'error', message: 'No token provided'});
    }

    try {
        const decoded= verifyToken(token.split(' ')[1]);
        req.user= decoded;
        next();
    } catch(err) {
        return res.status(403).json({ status: 'error', message: 'Token invalid' });
    }
}