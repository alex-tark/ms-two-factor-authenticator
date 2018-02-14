const Mservice      = require("@microfleet/core");
const merge         = require("lodash/merge");
const assert        = require("assert");
const get           = require("lodash");
const RedisCluster  = require("ioredis").Cluster;
const configuration = require('./config')

module.exports = class Authenticator extends Mservice {
    static defaultOpts = configuration.get('/', { env: process.env.NODE_ENV });

    constructor(opts = {}) {
        super(merge({}, Authenticator.defaultOpts, opts));

        const { config } = this;
        //const { prefix } = config.router.routes;

        config.authenticator = {}
    }
};
