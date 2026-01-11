import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      // Attach user to request (without password)
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      next();
    } else {
      return res.status(401).json({ message: "Not Authorized, no Token Found" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token Failed",
      error: error.message,
    });
  }
};