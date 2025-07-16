import Location from "../models/location.models.js";
import { HTTP_STATUS } from "../utils/httpStatus.js";

export const createLocation = async (req, res) => {
    try {
        const { city, state, country, zipCode } = req.body;

        const newLocation = new Location({
            city,
            state,
            country,
            zipCode
        });

        const savedLocation = await newLocation.save();

        return res.status(HTTP_STATUS.CREATED).json({
            success: true,
            message: "Location created successfully",
            data: savedLocation
        });
    } catch (error) {
        console.error("Error creating location:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to create location",
            error: error.message
        });
    }
}

export const getLocations = async (req, res) => {
    try {
        const locations = await Location.find();

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Locations retrieved successfully",
            data: locations
        });
    } catch (error) {
        console.error("Error retrieving locations:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to retrieve locations",
            error: error.message
        });
    }
}