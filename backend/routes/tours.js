import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const tourRoute = express.Router();

// Route for getting featured tours
tourRoute.get("/search/getFeaturedtours", getFeaturedTour);

tourRoute.get("/:id", getSingleTour);

tourRoute.post("/", verifyAdmin ,createTour);

tourRoute.put("/:id",verifyAdmin, updateTour);

tourRoute.delete("/:id",verifyAdmin, deleteTour);

tourRoute.get("/", getAllTour);

//get tour by search
tourRoute.get("/search/getTourBySearch", getTourBySearch);

tourRoute.get("/search/getTourCount", getTourCount);

export default tourRoute;
