const express = require('express');
const router = express.Router();
const { getHello } = require('../controllers/temp');

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Get hello message
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/hello', getHello);

module.exports = router;