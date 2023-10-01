"use strict";

/**
 * group controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::group.group", ({ strapi }) => ({
  async create(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;
    try {
      const group = await strapi.entityService.create("api::group.group", {
        data: {
          name: body.data.name,
          description: body.data.description,
          public: body.data.public,
          nsfw: body.data.nsfw,
          icon: body.data.icon,
          admin: user.id,
          users:user.id
        },
      });
      return group;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
}));
