import express from 'express';
import mongoose from 'mongoose';

import Attractions from '../models/attractionDetails.js';

const router = express.Router();

export const getAttractions = async (req, res) => { 
    try {
        const attractionDetails = await Attractions.find();        
                
        res.status(200).json(attractionDetails);
        res.end();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default router;