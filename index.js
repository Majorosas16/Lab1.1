import data from './data/students.js';
import {alphaOrder} from './utils/orderByName.js';
// import {filterHighGrade} from './utils/filterHighGrade.js';
// import {calculateMeanGrade} from './utils/calculateMeanGrades.js';
import {renderStudent} from "./utils/renderStudents.js";

const container = document.querySelector(".app");

const order= alphaOrder(data);

order.forEach(element => {
    const studentCard = renderStudent(element)
    container.appendChild(studentCard);
    
});

// const render =  renderStudents(data);

// const order =  orderByName(data);
// const filter =  filterHighGrade(data);
// const mean =  calculateMeanGrade(data);
