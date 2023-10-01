"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;
    try {
      const groupname = body.data.groupname;
      // Pobierz id grupy na podstawie nazwy
      const group = await strapi.db
        .query("api::group.group")
        .findOne({
            select:['id'],
            where:{name:groupname}
         });
         console.log(group)
      const groupId = group ? group.id : null;

      const post = await strapi.entityService.create("api::post.post", {
        data: {
          content: body.data.content,
          nsfw: body.data.nsfw,
          image: body.data.image,
          user: user.id,
          group: groupId,
        },
      });
      return post;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
}));
