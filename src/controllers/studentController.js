import Student from "../models/student.js";

export const addStudent= async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const student= await Student.create({name, age, email});
        res.status(201).json(student);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}