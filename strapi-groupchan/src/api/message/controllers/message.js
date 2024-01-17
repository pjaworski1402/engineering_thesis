'use strict';

/**
 * message controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) => ({
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
        const groupId = group ? group.id : null;
  
        const message = await strapi.entityService.create("api::message.message", {
          data: {
            content: body.data.content,
            user: user.id,
            group: groupId,
          },
        });
        return message;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  }));
