import AWS from 'aws-sdk';



 async function scanDB() {
    const ddb = new AWS.DynamoDB();
    let data_arr = [];

    const params = {
        TableName: "GithubRepos"
    };
    
    await ddb.scan(params, (err, data) => {
        if(err) console.log("error: ", err);
        if(data) {
            data.Items.forEach(item => {
                data_arr.push(item);
            });
        };
    });

    console.log(data_arr)

};

scanDB();