const async = () => {
    return Promise.resolve();
};

const { config } = require('./app/config');

async()
.then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
        app.listen((process.env.PORT || 3000), () => {
            console.log(`Server running at localhost:${process.env.PORT || 3000}`);
        });
    });
