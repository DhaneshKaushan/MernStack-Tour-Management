import jwt from 'jsonwebtoken'

const errorHandler = (res, statusCode, message) => {
    return res.status(statusCode).json({ message });
  };
  
  const verifyToken = async (req, res, next) => {
    const token = req.cookies.accessToken;
  
    if (!token) {
      return errorHandler(res, 401, 'No token provided');
    }
    
    
    jwt.verify(token, process.env.JWT_SECRET ,(err,user)=>{
        if (err) {
            return errorHandler(res, 401, 'token is invalid'); 
        }
        
        req.user = user;
        next();
        
    });
    
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next() 
        }else{

         return errorHandler(res, 401, 'You are not authenticated');
            
        }
    })
  }

  export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if (req.user.role === 'admin') {
            next() 
        }else{

         return errorHandler(res, 401, 'You are not authorize');
            
        }
    })
  }