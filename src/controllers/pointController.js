const Point = require('../models/pointModel');

//================ create Point====================
const createPoint = async (req, res) => {
  try {
    const { name, latitude, longitude } = req.body;
    const point = new Point({ name, location: { type: 'Point', coordinates: [longitude, latitude] } });
    await point.save();
    res.status(201).json({message:"Successfully Created",point});
  } catch (error) {
    console.error('Error creating point:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//===========get All Points==================
const getAllPoints = async (req, res) => {
  try {
    const points = await Point.find();
    res.status(200).json({message:"Successfully get All Points",points});
  } catch (error) {
    console.error('Error fetching points:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//==============get Poiunts By Id==================

const getPointById = async (req, res) => {
  try {
    const { id } = req.params;
    const point = await Point.findById(id);
    if (!point) {
      res.status(404).json({ error: 'Point not found' });
    } else {
      res.status(200).json({message:"Successfully Fetched Data",point});
    }
  } catch (error) {
    console.error('Error fetching point by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//===========update point by Id =================
const updatePoint = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude } = req.body;
    const point = await Point.findByIdAndUpdate(id, { name, location: { type: 'Point', coordinates: [longitude, latitude] } }, { new: true });
    if (!point) {
      res.status(404).json({ error: 'Point not found' });
    } else {
      res.status(200).json({message:"Successfully Updated Daata",point});
    }
  } catch (error) {
    console.error('Error updating point:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  createPoint,
  getAllPoints,
  getPointById,
  updatePoint
  
};