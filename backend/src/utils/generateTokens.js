import jwt from 'jsonwebtoken';


export const generateAccessToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        phone: user.phone,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY_TIME });
}

export const generateRefreshToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        phone: user.phone,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY_TIME });
}

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    
    return {
        accessToken,
        refreshToken,
    };
}