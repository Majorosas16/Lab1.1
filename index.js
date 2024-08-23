import data from './data/students.js';
import {alphaOrder} from './utils/orderByName.js';
import {highGrade} from './utils/filterHighGrade.js';
import {calculateMeanGrade} from './utils/calculateMeanGrades.js';
import {organizeByCourse} from './utils/organizeByCourse.js';
import {renderStudent} from "./renders/render.js";

const container = document.querySelector(".app");

//Alphabetic
const order= alphaOrder(data);

    const h1 = document.createElement('h1');
    h1.textContent="Alphabetic order";
    container.appendChild(h1);

order.forEach(element => {
    const studentCard = renderStudent(element)
    container.appendChild(studentCard);
});

//High grade
const filter= highGrade(data);

    const h1_2 = document.createElement('h1');
    h1_2.textContent="Filter High Grade";
    container.appendChild(h1_2);

    filter.forEach(element => {
        const studentCard = renderStudent(element)
        container.appendChild(studentCard);
    });

//Mean Grade
const mean= calculateMeanGrade(data);

     const h1_3 = document.createElement('h1');
     h1_3.textContent="Mean Grade";
     container.appendChild(h1_3);

         const h4 = document.createElement('h4');
         h4.textContent="El promedio es: "+ mean
         const studentCard2 = renderStudent(mean);
         container.appendChild(h4)

//Course

const courseOrganize= organizeByCourse(data);

const h1_4 = document.createElement('h1');
h1_4.textContent="Course";
container.appendChild(h1_4);

Object.keys(courseOrganize).forEach((element) => { // Object.keys obtiene el nombre de los cursos
    const courseTitle = document.createElement('h2');
    courseTitle.classList.add('course-title');
    courseTitle.textContent = element;
    container.appendChild(courseTitle);

    courseOrganize[element].forEach((el) => {
        const studentCard = renderStudent(el);
        container.appendChild(studentCard);
    });
});



