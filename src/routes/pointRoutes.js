const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

router.post('/points', pointController.createPoint);
router.get('/points', pointController.getAllPoints);
router.get('/points/:id', pointController.getPointById);
router.put('/points/:id', pointController.updatePoint);

module.exports = router;