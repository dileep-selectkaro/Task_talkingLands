const Polygon = require('../models/polygonModel');


//==============create Polygon =============
const createPolygon = async (req, res) => {
  try {
    const { name, coordinates } = req.body;
    const polygon = new Polygon({ 
      name, 
      coordinates: {
        type: 'Polygon',
        coordinates: coordinates
      }
    });
    await polygon.save();
    res.status(201).json({ message: "Successfully Created Polygon", polygon });
  } catch (error) {
    console.error('Error creating polygon:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



//===============get all Polygons======================
const getAllPolygons = async (req, res) => {
  try {
    const polygons = await Polygon.find();
    res.status(200).json({message:"successfully Get All Polygons",polygons});
  } catch (error) {
    console.error('Error fetching polygons:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//=============get polygon by id===============
const getPolygonById = async (req, res) => {
  try {
    const { id } = req.params;
    const polygon = await Polygon.findById(id);
    if (!polygon) {
      res.status(404).json({ error: 'Polygon not found' });
    } else {
      res.status(200).json({message:"successfully fetched",polygon});
    }
  } catch (error) {
    console.error('Error fetching polygon by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//=========update==================
const updatePolygon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, coordinates } = req.body;
    const polygon = await Polygon.findByIdAndUpdate(id, { name, coordinates }, { new: true });
    if (!polygon) {
      res.status(404).json({ error: 'Polygon not found' });
    } else {
      res.status(200).json({message:"Successfully updated",polygon});
    }
  } catch (error) {
    console.error('Error updating polygon:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  createPolygon,
  getAllPolygons,
  getPolygonById,
  updatePolygon
};