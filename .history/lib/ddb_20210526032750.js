import AWS from 'aws-sdk';

const ddb = await new AWS.DynamoDB();

console.log(ddb.apiVersions)