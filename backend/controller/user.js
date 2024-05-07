import User from "../models/user.js";
import { errorHandler } from "../utils/error.js";

export const getUser = async (req, res, next) => {
  try {
    const { username } = req.params;

    // Use findOne to find a user by their username
    const user = await User.findOne({ username });

    if (!user) return next(errorHandler(404, "User not found!"));

    const { password: pass, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
