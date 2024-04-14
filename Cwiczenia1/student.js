//-------------Zad 1----------------
let FullName = "Denys Halytskyi", Student_id = 46459;

let student = `My name is ${FullName}. My student ID is ${Student_id}.`;

console.log(student);

//-------------Zad 2----------------


function getStudentFullName()
{
    let FullName = "Denys Halytskyi";
    console.log(`My name is ${FullName}. `);
}
function getStudentId()
{
    let Student_id = 46459;
    console.log(`My student ID is ${Student_id}.`);
}
getStudentFullName();
getStudentId();

//----------------Zad 3-------------------
module.exports = {
    getStudentFullName,
    getStudentId,
};