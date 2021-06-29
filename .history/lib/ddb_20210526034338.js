import AWS from 'aws-sdk';



 async function scanDB() {
    const ddb = new AWS.DynamoDB();

    const params = {
        TableName: "GithubRepos"
    };
    
    const data = await ddb.scan(params, (err, data) => {
        if(err) console.log("error: ", err);
        if(data) console.log() 
        // return data.Items;
    });

};

console.log(await scanDB());