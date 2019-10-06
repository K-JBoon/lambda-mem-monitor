# lambda-mem-monitor

This SAM project contains sample code to demo the `unix-mem-monitor` npm package for monitoring memory usage in AWS Lambda.

# Usage

To use this sample project, make sure you have set up the AWS SAM CLI and all tooling needed to run it locally: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

For local testing, the only commands you will need are:

`sam build`

and

`sam local invoke --event events/event.json`