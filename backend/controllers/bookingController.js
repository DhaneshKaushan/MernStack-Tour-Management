import Booking from "../models/Booking.js"

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
  
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json({ 
          success: true, 
          message: "Your Tour is Booked", 
          data: savedBooking
      });
    } catch (error) {
      console.error("Error while creating booking:", error);
      res.status(500).json({ 
          success: false, 
          message: "Internal Server Error",
          error: error.message // Send the error message to the client for debugging
      });
    }
  };