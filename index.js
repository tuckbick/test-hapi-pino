const Hapi = require('@hapi/hapi');

async function start() {
    const server = Hapi.server({port: 8080});

    await server.register({
        plugin: require('hapi-pino'),
        options: {
            redact: {
                paths: ['responseTime'],
                remove: true
            }
        }
    })

    server.route({
        path: '/',
        method: 'GET',
        handler: () => 'ok'
    });

    await server.start();
}

start().catch(console.error);