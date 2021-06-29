import AWS from 'aws-sdk';



function scanDB() {
    const ddb = new AWS.DynamoDB();

    const params = {
        TableName: "GithubRepos"
    };
    
    const data = ddb.scan(params, (err, data) => {
        if(err) console.log(err);
        if(data) return data.Items;
    });
};