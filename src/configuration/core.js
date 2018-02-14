const Mservice = require("@mirofleet/core");
const path     = require("path");

exports.debug = process.env.NODE_ENV !== 'production';

exports.logger = {
    defaultLogger: true,
    debug: process.env.NODE_ENV !== 'production'
};

exports.predefinedLimits = {
    maxConnections: 20
};

exports.router = {
    routes: {
        directory: path.join(__dirname, '../actions'),
        prefix: 'authenticator',
        setTransportsAsDefault: true,
        tranports: [Mservice.ActionTransport.amqp]
    },
    extensions: {
        enabled: ['postRequest', 'preRequest', 'preResponse'],
        register: [
            Mservice.routerExtension('validate/schemaLessAction'),
            Mservice.routerExtension('adult/log')
        ]
    }
};

exports.htmlToText = {
    wordwrap: 140
};

exports.plugins = ['validator', 'logger', 'router', 'amqp'];

exports.validator = ['../schemas'];
