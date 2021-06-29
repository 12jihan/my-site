import AWS from 'aws-sdk';



function scanDB() {
    const ddb = new AWS.DynamoDB();

    const params = {
        TableName: "GithubRepos"
    };
    
    ddb.scan(params, (err, data) => {
        if(err) console.log(err);
        if9data
    });
};