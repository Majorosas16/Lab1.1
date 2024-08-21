 export const renderStudent = ({id,name,age,grade,course}) =>{

    const figure = document.createElement('figure');
    const h1_Name = document.createElement('h1');
    const h2_id = document.createElement('h2');
    const p_age = document.createElement('p');
    const p_grade = document.createElement('p');
    const p_course = document.createElement('p');


    h1_Name.textContent=name;
    h2_id.textContent=id;
    p_age.textContent=age;
    p_grade.textContent=grade;
    p_course.textContent=course;

    figure.appendChild(h1_Name);
    figure.appendChild(h2_id);
    figure.appendChild(p_age);
    figure.appendChild(p_grade);
    figure.appendChild(p_course);

    return figure;
}