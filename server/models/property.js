import mongoose from 'mongoose';

const { Schema, model } = require('mongoose');

const propertySchema = new Schema(
    {
        address: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        state: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        zipcode: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        hasdog: {
            type: Boolean,
            required: true,
        },
        aknowledgesdogpolicy: {
            type: Boolean,
            required: true,
        },
    }
);

const Property = model('Class', propertySchema);

module.exports = Property;