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
  async update(ctx) {
    const {
      state: { user },
      params: { id },
    } = ctx;

    try {
      // Fetch the group to check if it exists
      const group = await strapi.entityService.findOne("api::group.group", id, { populate: ["users"] });
      if (!group) {
        return ctx.notFound("Group not found");
      }
      // Add the user to the group
      const updatedGroup = await strapi.entityService.update("api::group.group", id, {
        data: {
          users: [...group.users, user.id],
        },
      });

      return updatedGroup;
    } catch (error) {
      console.log(error);
      return ctx.internalServerError("Unable to join group");
    }
  },
}));
