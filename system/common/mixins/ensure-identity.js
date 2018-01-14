module.exports = (Model, options) => {
    'use strict';

    Model.observe('before save', (ctx, next) => {
        const token = (ctx.options || {}).accessToken || {};

        if (ctx.instance) {
            ctx.instance.setAttribute('hubUserId', token.userId);
        } else {
            ctx.data['hubUserId'] = token.userId;
        }

        next();
    });
}