import Property from "../models/property.models.js";
import Location from "../models/location.models.js";
import { HTTP_STATUS } from "../utils/httpStatus.js";

export const createProperty = async (req, res) => {
    try {
        const { title, description, price, status, type, imageURL, isAvailable, addressLine, location } = req.body;

        const newProperty = new Property({
            title,
            description,
            price,
            status,
            type,
            imageURL,
            isAvailable,
            addressLine,
            location
        });

        const savedProperty = await newProperty.save();

        return res.status(HTTP_STATUS.CREATED).json({
            success: true,
            message: "Property created successfully",
            data: savedProperty
        });
    } catch (error) {
        console.error("Error creating property:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to create property",
            error: error.message
        });
    }
}

export const getProperties = async (req, res) => {
    try {
        const query = req.query || {};
        const locationQuery = query.location || "";
        const typeQuery = query.type || "";
        const statusQuery = query.status || "";

        // Build filter conditions dynamically
        const matchConditions = {};
        
        if (typeQuery) {
            matchConditions.type = new RegExp(typeQuery, 'i');
        }
        
        if (statusQuery) {
            matchConditions.status = new RegExp(statusQuery, 'i');
        }


        const pipeline = [
            // First lookup to get location details
            {
                $lookup: {
                    from: 'locations',
                    localField: 'location',
                    foreignField: '_id',
                    as: 'locationDetails'
                }
            },
            // Then match based on all criteria including location
            {
                $match: {
                    $and: [
                        matchConditions, // Apply type and status filters
                        locationQuery ? {
                            $or: [
                                { addressLine: new RegExp(locationQuery, 'i') },
                                { 'locationDetails.city': new RegExp(locationQuery, 'i') },
                                { 'locationDetails.state': new RegExp(locationQuery, 'i') },
                                { 'locationDetails.country': new RegExp(locationQuery, 'i') }
                            ]
                        } : {}
                    ].filter(condition => Object.keys(condition).length > 0) // Remove empty conditions
                }
            },
            // Project the final result
            {
                $project: {
                    title: 1,
                    description: 1,
                    price: 1,
                    status: 1,
                    type: 1,
                    imageURL: 1,
                    isAvailable: 1,
                    addressLine: 1,
                    location: { $arrayElemAt: ['$locationDetails', 0] }
                }
            }
        ];

        const properties = await Property.aggregate(pipeline);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            data: properties,
            total: properties.length
        });
    } catch (error) {
        console.error("Error fetching properties:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to fetch properties",
            error: error.message
        });
    }
}



export const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await Property.findById(id).populate('location');

        if (!property) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                success: false,
                message: "Property not found"
            });
        }

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            data: property
        });
    } catch (error) {
        console.error("Error fetching property:", error);
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to fetch property",
            error: error.message
        });
    }
}