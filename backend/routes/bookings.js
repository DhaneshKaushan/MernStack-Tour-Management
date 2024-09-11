import express from 'express';
import {verifyAdmin, verifyUser}  from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

const reviewRoute = express.Router();

// Create a new review for a tour
reviewRoute.post('/' , verifyUser, createBooking);
reviewRoute.get('/:id' , verifyUser, getBooking);
reviewRoute.get('/' , verifyAdmin, getAllBooking);



export default reviewRoute;
