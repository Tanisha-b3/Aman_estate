import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import { HTTP_STATUS } from "../utils/httpStatus.js";
import { generateTokens } from "../utils/generateTokens.js";

export const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.find({ email });
        if (existingUser.length > 0) {
            return res.status(HTTP_STATUS.CONFLICT).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword
        });
        // Save the user to the database
        await newUser.save();
        
        const user = await User.findOne({ email }).select("-password");

        return res.status(HTTP_STATUS.CREATED).json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
            error: error.message
        });
    }
};


export const loginUserFlexible = async (req, res) => {
    const { identifier, password } = req.body; // identifier can be email or phone

    try {
        if (!identifier || !password) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Both identifier (email or phone) and password are required"
            });
        }

        // Check if identifier is email (contains @) or phone number
        const isEmail = identifier.includes('@');
        
        // Build query based on identifier type
        const query = isEmail 
            ? { email: identifier }
            : { phone: identifier };

        // Find user by email or phone
        const user = await User.findOne(query);

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "User not found"
            });
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                message: "Invalid credentials"
            });
        }

        // Generate JWT token
        const token = generateTokens(user);

        const userData = await User.findOne({ _id: user._id }).select("-password");

        return res.status(HTTP_STATUS.OK).json({
            message: "Login successful",
            user: userData,
            token
        });

    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
            error: error.message
        });
    }
};