const express = require('express');
const router = express.Router();
const polygonController = require('../controllers/polygonController');

router.post('/polygons', polygonController.createPolygon);
router.get('/polygons', polygonController.getAllPolygons);
router.get('/polygons/:id', polygonController.getPolygonById);
router.put('/polygons/:id', polygonController.updatePolygon);

module.exports = router;