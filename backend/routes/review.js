import express from 'express';
import {
  createReview,

} from "../controllers/reviewController.js";
import {verifyUser}  from '../utils/verifyToken.js';

const reviewRoute = express.Router();

// Create a new review for a tour
reviewRoute.post('/:tourId' ,createReview);

// Get all reviews for a tour
// reviewRoute.get('/:tourId', getTourReviews);

// Delete a review
// reviewRoute.delete('/:reviewId',verifyUser, deleteReview);

export default reviewRoute;
