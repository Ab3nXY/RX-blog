const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/blogs');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting the router for handling blog-related routes
app.use('/api/blogs', postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
