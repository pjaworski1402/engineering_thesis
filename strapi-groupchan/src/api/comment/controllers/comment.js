'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
  async create(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;

    // Extract the post ID and the comment content from the request body
    const { postId, content } = body.data;

    // Check if the post exists
    const postExists = await strapi.entityService.count('api::post.post', { 
      where: { id: postId } 
    });
    if (!postExists) {
      return ctx.badRequest('Post not found');
    }

    try {
      // Create the comment
      const comment = await strapi.entityService.create('api::comment.comment', {
        data: {
          content: content,
          post: postId,
          user: user.id, // Link the comment to the authenticated user
        },
      });

      return comment;
    } catch (error) {
      console.log(error);
      return ctx.internalServerError('Unable to create comment');
    }
  },
}));