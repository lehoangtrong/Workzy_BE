import express from "express";
import * as controllers from "../controllers";
import {verify_admin, verify_token} from "../middlewares/verifyToken";

const router = express.Router();

router.post("/", verify_token, verify_admin, controllers.createAmenityController
    /*
        #swagger.description = 'Endpoint to create a new amenity.'
        #swagger.summary = 'Create a new amenity.'
        #swagger.tags = ['Amenities']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: 'object',
                        properties: {
                            amenity_name: {
                                type: 'string',
                                example: 'Fax Machine'
                            },
                            image: {
                                type: 'string',
                                example: 'fax-machine.png'
                            },
                            original_price: {
                                type: 'integer',
                                example: 100000
                            },
                            type: {
                                type: 'string',
                                example: 'device'
                            },
                        },
                        required: ['amenity_name', 'original_price', 'type']
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: 'Amenity created successfully.',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Amenity"
                    }
                }
            }
        }
        #swagger.responses[400] = {
            description: 'Invalid data.'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized - Invalid or missing token.'
        }
        #swagger.responses[403] = {
            description: 'Forbidden - User is not an admin.'
        }
        #swagger.responses[500] = {
            description: 'Internal server error.'
        }
        #swagger.security = [{
            "apiKeyAuth": []
        }]
    */
);
router.put("/:id", verify_token, verify_admin, controllers.updateAmenityController
    /*
        #swagger.description = 'Endpoint to update an amenity.'
        #swagger.summary = 'Update an amenity.'
        #swagger.tags = ['Amenities']
        #swagger.parameters['id'] = { 
            in: 'path',
            description: 'Amenity ID.',
            required: true,
            type: 'string'
        }
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: 'object',
                        properties: {
                            amenity_name: {
                                type: 'string',
                                example: 'Updated Fax Machine'
                            },
                            image: {
                                type: 'string',
                                example: 'updated-fax-machine.png'
                            },
                            original_price: {
                                type: 'integer',
                                example: 120000
                            },
                            type: {
                                type: 'string',
                                example: 'device'
                            },
                        }
                    }
                }
            }
        }
        #swagger.responses[200] = {
            description: 'Amenity updated successfully.',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Amenity"
                    }
                }
            }
        }
        #swagger.responses[400] = {
            description: 'Invalid data.'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized - Invalid or missing token.'
        }
        #swagger.responses[403] = {
            description: 'Forbidden - User is not an admin.'
        }
        #swagger.responses[404] = {
            description: 'Amenity not found.'
        }
        #swagger.responses[500] = {
            description: 'Internal server error.'
        }
        #swagger.security = [{
            "apiKeyAuth": []
        }]
     */
);
router.delete("/", verify_token, verify_admin, controllers.deleteAmenityController
    /*
        #swagger.description = 'Endpoint to delete an amenity.'
        #swagger.summary = 'Delete an amenity.'
        #swagger.tags = ['Amenities']
        #swagger.parameters['amenity_id'] = { 
            in: 'query',
            description: 'Amenity ID.',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: 'Amenity deleted successfully.'
        }
        #swagger.responses[400] = {
            description: 'Invalid amenity ID.'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized - Invalid or missing token.'
        }
        #swagger.responses[403] = {
            description: 'Forbidden - User is not an admin.'
        }
        #swagger.responses[404] = {
            description: 'Amenity not found.'
        }
        #swagger.responses[500] = {
            description: 'Internal server error.'
        }
        #swagger.security = [{
            "apiKeyAuth": []
        }]
     */
);

router.get("/", verify_token, verify_admin, controllers.getAllAmenityController
    /*
        #swagger.description = 'Endpoint to get all amenities.'
        #swagger.summary = 'Get all amenities.'
        #swagger.tags = ['Amenities']
        #swagger.parameters['order'] = { 
            in: 'query',
            description: 'Order by name, type, or price.',
            type: 'string'
        }
        #swagger.parameters['page'] = { 
            in: 'query',
            description: 'Page number.',
            type: 'integer'
        }
        #swagger.parameters['limit'] = { 
            in: 'query',
            description: 'Number of items per page.',
            type: 'integer'
        }
        #swagger.parameters['name'] = { 
            in: 'query',
            description: 'Amenity name for filtering.',
            type: 'string'
        }
        #swagger.responses[200] = {
            description: 'Amenities found.',
            content: {
                "application/json": {
                    schema: {
                        type: 'object',
                        properties: {
                            amenities: {
                                type: 'array',
                                items: {
                                    $ref: "#/components/schemas/Amenity"
                                }
                            },
                            totalPages: {
                                type: 'integer'
                            },
                            currentPage: {
                                type: 'integer'
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[401] = {
            description: 'Unauthorized - Invalid or missing token.'
        }
        #swagger.responses[403] = {
            description: 'Forbidden - User is not an admin.'
        }
        #swagger.responses[500] = {
            description: 'Internal server error.'
        }
        #swagger.security = [{
            "apiKeyAuth": []
        }]
     */
);
router.get("/:id", verify_token, verify_admin, controllers.getAmenityByIdController
    /*
        #swagger.description = 'Endpoint to get an amenity by ID.'
        #swagger.summary = 'Get an amenity by ID.'
        #swagger.tags = ['Amenities']
        #swagger.parameters['id'] = { 
            in: 'path',
            description: 'Amenity ID.',
            required: true,
            type: 'string'
        }
        #swagger.responses[200] = {
            description: 'Amenity found.',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Amenity"
                    }
                }
            }
        }
        #swagger.responses[401] = {
            description: 'Unauthorized - Invalid or missing token.'
        }
        #swagger.responses[403] = {
            description: 'Forbidden - User is not an admin.'
        }
        #swagger.responses[404] = {
            description: 'Amenity not found.'
        }
        #swagger.responses[500] = {
            description: 'Internal server error.'
        }
        #swagger.security = [{
            "apiKeyAuth": []
        }]
     */
);

module.exports = router;