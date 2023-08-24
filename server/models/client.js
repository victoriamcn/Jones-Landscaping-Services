import mongoose from 'mongoose';

const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
  {
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
    hasdog: {
        type: Boolean,
        required: true,
    },
    aknowledgesdogpolicy: {
        type: Boolean,
        required: true,
    },
    mainphone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    secondphone: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    paid: {
        type: Boolean,
        required: true,
    },
    birthday: {
        type: Date,
        required: false,
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    appointments: {
        type: Schema.Types.ObjectId,
        ref: 'Appointments'
    },
    notes: {
        type: Schema.Types.ObjectId,
        ref: 'Notes'
    }
  }
);

const Client = model('Class', clientSchema);

module.exports = Client;
