import AWS from 'aws-sdk';

const ddb = new AWS.DynamoDB();
const params = {
    TableName: "GithubRepos"
};

dyna