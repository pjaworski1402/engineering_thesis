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
// Method to toggle like on a post
async update(ctx) {
  const {
    state: { user },
    params: { id },
  } = ctx;

  try {
    // Check if the post exists
    const post = await strapi.entityService.findOne("api::post.post", id, { populate: ["like"] });
    if (!post) {
      return ctx.notFound("Post not found");
    }

    // Check if the user has already liked the post
    const alreadyLiked = post.like.some(like => like.id === user.id);
    let message;

    if (alreadyLiked) {
      // Remove the like
      const updatedLikes = post.like.filter(like => like.id !== user.id);
      await strapi.entityService.update("api::post.post", id, {
        data: {
          like: updatedLikes,
        },
      });
      message = "Disliked";
    } else {
      // Add the like
      await strapi.entityService.update("api::post.post", id, {
        data: {
          like: [...post.like, user.id],
        },
      });
      message = "Liked";
    }

    return { message: message };
  } catch (error) {
    console.log(error);
    return ctx.internalServerError("Unable to toggle like");
  }
},
}));
