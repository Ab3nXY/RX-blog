const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM blogs');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET blog details by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE a blog post by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the blog post exists before deleting
    const result = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Delete the blog post
    await pool.query('DELETE FROM blogs WHERE id = $1', [id]);

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const { title, body, author } = req.body;
  try {
    await pool.query('INSERT INTO blogs (title, body, author) VALUES ($1, $2, $3)', [title, body, author]);
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Other CRUD endpoints (GET by id, PUT, DELETE) can be added similarly

module.exports = router;


