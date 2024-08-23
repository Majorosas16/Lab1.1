export function organizeByCourse(students) {
    const result = {}; 
    
    students.forEach(element => {
        const course = element.course; // Obtiene el curso del estudiante

        // Si el curso no existe en el objeto, se inicia con un array vacío
        if (!result[course]) {
            result[course] = [];
        }

                // Se añade el estudiante al array correspondiente al curso
        result[course].push(element);

    });
    
    return result; 
}