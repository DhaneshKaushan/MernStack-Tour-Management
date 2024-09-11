import Booking from "../models/Booking.js"
//create new booking
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

//get single booking
export const getBooking = async(req,res) =>{
    const id = req.params.id;

  try {
      const book = await Booking.findById(id);
      res.status(200).json({ 
        success: true, 
        message: "successful", 
        data: book,
    });
  } catch (error) {
    res.status(404).json({ 
      success: false, 
      message: "not found",
      error: error.message // Send the error message to the client for debugging
  });
    
    
  }
}

//get all booking
  export const getAllBooking = async(req,res) =>{
    

    try {
        const books = await Booking.find();
        res.status(200).json({ 
          success: true, 
          message: "successful", 
          data: books,
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "internal server error",
        error: error.message // Send the error message to the client for debugging
    });
      
      
    }
  }