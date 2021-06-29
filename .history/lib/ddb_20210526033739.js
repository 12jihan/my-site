import AWS from 'aws-sdk';

const ddb = new AWS.DynamoDB();
const params = {
    TableName: "GithubRepos"
};

ddb.scan(params, (err, data) => {
    if(err) console.log(err);
    if(data) console.log(data.Items);
});

function()