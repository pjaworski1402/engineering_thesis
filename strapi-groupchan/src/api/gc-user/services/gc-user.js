'use strict';

/**
 * gc-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gc-user.gc-user');
