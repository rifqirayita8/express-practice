import Student from "../models/student.js";

export const registerStudent= async (studentData) => {
    return await Student.create(studentData);
};

export const findStudentByEmail= async (email) => {
    return await Student.findOne({ where: { email } });
};

export const findStudentById= async (id) => {
    return await Student.findByPk(id);
}

export const readStudent= async (offset, limit) => {
    const student= await Student.findAll({
      offset: offset,
      limit: limit
    });
    return student.map(student => ({
        id: student.id,
        name: student.name,
    }));
}

export const updateStudentById= async (id, updateData) => {
    const student= await findStudentById(id);
    
    if (!student) {
        return null;
    }

    await student.update(updateData);

    return student;
}

export const deleteStudentById= async (id) => {
    const student= await findStudentById(id);

    if (!student) {
        return null;
    }

    await student.destroy();
    return student;
}