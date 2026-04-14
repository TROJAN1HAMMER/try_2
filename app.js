const express = require('express');
const app = express();

const helloRoutes = require('./routes/helloRoutes');
const swaggerDocs = require('./swagger');

app.use('/api', helloRoutes);

// Swagger
swaggerDocs(app);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});