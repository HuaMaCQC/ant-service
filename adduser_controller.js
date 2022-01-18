const getId = require('./get_id');
const setDb = require('./set_db');
module.exports = {
    create:async ctx => {
        ctx.body = await setDb.saveID(getId.uuid());
    }
}