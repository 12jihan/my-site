import AWS from 'aws-sdk';



 async function scanDB() {
    const ddb = new AWS.DynamoDB();

    const params = {
        TableName: "GithubRepos"
    };
    
    const data = ddb.scan(params, (err, data) => {
        if(err) console.log(err);
        if(data) return data.Items;
    });

    return data;
};

console.log(scanDB());