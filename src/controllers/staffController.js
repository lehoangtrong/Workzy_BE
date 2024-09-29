import Joi from "joi";
import {email, password, name, phone, date_of_birth, gender} from "../helper/joi_schema";
import {badRequest} from "../middlewares/handle_error";
import * as services from "../services";

export const createStaffController = async (req, res) => {
    try {
        const error = Joi.object({
            name,
            email,
            password,
            phone
        }).validate(req.body).error;
        if (error) return badRequest(res, error.details[0].message);

        const response = await services.createStaffService(req.body);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const getStaffProfileController = async (req, res) => {
    try {
        const response = await services.getStaffByIdService(req.user.id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const getStaffByIdController = async (req, res) => {
    try {
        const response = await services.getStaffByIdService(req.params.id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const getAllStaffController = async (req, res) => {
    try {
        const response = await services.getAllStaffService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

export const updateStaffProfileController = async (req, res) => {
    try {
        const error = Joi.object({
            name,
            gender,
            date_of_birth
        }).validate(req.body).error;
        if (error) return badRequest(res, error.details[0].message);
        const response = await services.updateStaffProfileService( req.params.id, req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const deleteStaffController = async (req, res) => {
    try {
        console.log(req.params.id)
        const response = await services.deleteStaffService(req.params.id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const assignStaffToBuildingController = async (req, res) => {
    try {
        const error = Joi.object({
            id: Joi.required(),
            building_id: Joi.required()
        }).validate({
            id: req.params.id,
            building_id: req.body.building_id
        }).error;
        if (error) return badRequest(res, error);
        const response = await services.assignStaffToBuildingService(req.params.id, req.body.building_id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}