import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { username, email, password, photo } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Check if the username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword, photo });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to register user' });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password, role, ...rest} =user._doc;

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15d' });

    //set token in the browser cookies and send the response to the client
    res.cookie('acessToken',token,{
        httpOnly:true,
        expires:token.expiresIn
    }).status(200).json(
      {token,
      data:{ ... rest},
      role,}
    )

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to login' });
  }
};

export default { registerUser, loginUser };