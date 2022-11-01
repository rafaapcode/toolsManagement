import app from './app';
import cluster from 'cluster';
import os from 'os';
const cpuLength = os.cpus().length;

if (cluster.isPrimary) {
    for (let i = 0; i < cpuLength; i++) {
        cluster.fork();
    };
} else if (cluster.isWorker) {

    app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))
}
