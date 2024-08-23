 export const renderStudent = ({id,name,age,grade,course}) =>{


    const figure = document.createElement('figure');
    const h1_Name = document.createElement('h1');
    const h2_id = document.createElement('h2');
    const p_age = document.createElement('p');
    const p_grade = document.createElement('p');
    const p_course = document.createElement('p');



    h1_Name.textContent=`Nombre: ${name}`;
    h2_id.textContent=`Id: ${id}`;
    p_age.textContent=`Edad: ${age}`;
    p_grade.textContent=`Nota: ${grade}`;
    p_course.textContent=`Curso: ${course}`;


    figure.appendChild(h1_Name);
    figure.appendChild(h2_id);
    figure.appendChild(p_age);
    figure.appendChild(p_grade);
    figure.appendChild(p_course);

    return figure;
}