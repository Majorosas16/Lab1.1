export const highGrade = (array) =>{
    const filteredStudents = array.filter(student => student.grade > 80);
    const sortedStudents = filteredStudents.sort((a, b) => b.grade - a.grade); 

    return sortedStudents;
}