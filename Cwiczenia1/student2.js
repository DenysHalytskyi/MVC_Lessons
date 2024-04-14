//---------------Zad 6---------------------
const prompt = require('prompt-sync')();
let enter_id = prompt("Enter Id: ");

function getStudentFullName(enter_id)
{
    switch(enter_id)
    {
        case '0': return "Denys Halytskyi";
        case '1': return "Kacper Nowak";
        case '2': return "Maja Kowalska";
        default:
            return "Michal Wisniewski";
    }
}
function getStudentId(enter_id)
{
    switch(enter_id)
    {
        case '0': return 46459;
        case '1': return 111222;
        case '2': return 222333;
        default:
            return 333444;
    }
}

console.log(`My name is ${getStudentFullName(enter_id)}. My student Id is ${getStudentId(enter_id)}`);