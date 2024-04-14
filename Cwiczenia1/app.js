//-----------------Zad 3--------------------
let student = require('./student');
student.getStudentFullName();
student.getStudentId();

//------------------Zad 4--------------------
let http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`My name is ${student.getStudentFullName()}. My student Id is ${student.getStudentId()}.`);
    res.end();
});

server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student Id is ${student.getStudentId()}.`);
});