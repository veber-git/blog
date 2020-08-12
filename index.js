const app = require('./app');
const database = require('./database');
const config = require('./config');

database().then((info) => {
    console.log(`connect to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}`));
}).catch(() => {
    console.error('Unable connect to database');
    process.exit(1); //Выйдет из node
});