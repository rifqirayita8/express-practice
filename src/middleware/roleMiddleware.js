export const authorizeRole= (requiredRole) => {
    return (req, res, next) => {
        const { role }= req.user;
        if (!role || role !== requiredRole) {
            return res.status(403).json({status: 'error', message: 'You do not have the required role'});        
        }
        next();
    }
}