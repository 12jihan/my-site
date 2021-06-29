import AWS from 'aws-sdk';



 async function scanDB() {
    const ddb = new AWS.DynamoDB();
    let data_arr
    const params = {
        TableName: "GithubRepos"
    };
    
    const data = await ddb.scan(params, (err, data) => {
        if(err) console.log("error: ", err);
        if(data) console.log('data', [data.Items]) 
        // return data.Items;
    });

};