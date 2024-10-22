export function postUserController(req, res, next) {
    const { name, email, password }= req.body;
    res.status(201).json({
        statusCode: 201,
        message: 'User added successfully',
        payload: {
            name,
            email,
            password
        }
    });
}