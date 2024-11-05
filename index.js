const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const classAssignmentRoutes = require('./routes/classAssignmentRoutes');

const welcomeRoute = require('./routes/welcomeRouts');

app.use(express.json());

// Use the welcome route
app.use('/', welcomeRoute);

// Use the defined routes
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/class_assignments', classAssignmentRoutes);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});