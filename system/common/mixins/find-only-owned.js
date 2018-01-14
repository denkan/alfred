module.exports = (Model, options) => {
    'use strict';

    Model.beforeRemote('find', (ctxWithArgs, data, next) => {
        const ctx = ctxWithArgs.args || {};
        ctx.options = ctx.options || {};

        ctx.filter = ctx.filter || {};
        ctx.filter.where = ctx.filter.where || {};

        const token = ctx.options.accessToken || {};
        ctx.filter.where['hubUserId'] = token.userId;

        next();
    });

}