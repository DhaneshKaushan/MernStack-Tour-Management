import express from 'express';
import {
  createReview,

} from "../controllers/reviewController.js";
import {verifyUser}  from '../utils/verifyToken.js';

const reviewRoute = express.Router();

// Create a new review for a tour
reviewRoute.post('/:tourId' ,verifyUser, createReview);



export default reviewRoute;
