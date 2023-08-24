import mongoose from 'mongoose';

const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
  {
    _id {
        type
    },
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // connect to property
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    // payment type
    // birthday
    // 
  }
);

const Client = model('Class', clientSchema);

module.exports = Client;
