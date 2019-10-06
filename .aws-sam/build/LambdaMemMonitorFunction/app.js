const MemMonitor = require('unix-mem-monitor');
const { spawn } = require('child_process');

let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 */
exports.lambdaHandler = async (event, context) => {
    try {

        spawn('tail', ['-f', '/bin/ls']);

        const memMonitor = new MemMonitor({ PID: process.pid, monitorChildProcesses: true });

        await memMonitor.init();

        memMonitor.on('data', data => {
            const mergedMemData = memMonitor.getMergedMemoryData();

            console.log(mergedMemData.resident);
        });

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello wo2rld',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    await new Promise((resolve) => { setTimeout(resolve, 10000) });
    return response;
};
