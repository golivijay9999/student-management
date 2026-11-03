
const express = require("express");

const app = express();

// Get the port from Render or use 3000 locally
const PORT = process.env.PORT || 3000;

// Sample student data
const students = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Arjun" }
];

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Student Management System!</h1>
    <h2>Students List</h2>
    <ul>
      ${students.map(student =>
        `<li>${student.name}</li>`
      ).join("")}
    </ul>
  `);
});

// Students API
app.get("/students", (req, res) => {
  res.json(students);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
