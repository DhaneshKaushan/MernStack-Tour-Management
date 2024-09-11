import express from 'express';
import {verifyUser}  from '../utils/verifyToken.js';
import { createBooking } from '../controllers/bookingController.js';

const reviewRoute = express.Router();

// Create a new review for a tour
reviewRoute.post('/' , verifyUser, createBooking);



export default reviewRoute;
