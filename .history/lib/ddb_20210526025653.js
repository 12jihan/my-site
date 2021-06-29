import AWS from 'aws-sdk';

export default class DynamoLayer {
    ddb = new AWS.DynamoDB();

    constructor() {
        console.log(ddb);
    };

};