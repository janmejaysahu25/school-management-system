const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const classAssignmentRoutes = require('./routes/classAssignmentRoutes');

const welcomeRoute = require('./routes/welcomeRoutes');

app.use(express.json());

app.use('/', welcomeRoute);

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/class_assignments', classAssignmentRoutes);

const PORT = process.env.PORT || 3067;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});