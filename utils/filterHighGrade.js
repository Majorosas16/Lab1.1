export const highGrade = (array) =>{
    const filteredStudents = students.filter(student => student.grade > 80);
    const sortedStudents = filteredStudents.sort((a, b) => b.grade - a.grade); 

    return sortedStudents;
}