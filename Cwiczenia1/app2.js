//-------------------Zad 5---------------------
const http = require('http');
const student = require('./student');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>About student</title>
        </head>
        <body>
            <p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>
        </body>
        </html>
    `;
    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
