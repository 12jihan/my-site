import AWS from 'aws-sdk';



 async function scanDB() {
    const ddb = new AWS.DynamoDB();

    const params = {
        TableName: "GithubRepos"
    };
    
    const data = await ddb.scan(params, (err, data) => {
        let data_arr;

        if(err) console.log("error: ", err);
        if(data) {
            data.Items.forEach(item => {
                data_arr.push(item);
                console.log(item)
            });
        };

        return data_arr;
    });

};

scanDB();