let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const s3 = new AWS.S3();
s3.putObject({
    "Body": "qwe",
    "Bucket": "hiru.test.bucket",
    "Key": "qw"
})
    .promise()
    .then(data => {
        console.log(data);           // successful response
        /*
        data = {
            ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
            VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
        }
        */
    })
    .catch(err => {
        console.log(err, err.stack); // an error occurred
    });
sns.publish({
    Message: 'test message',
    MessageAttributes: {},
    MessageStructure: 'String',
    TopicArn: 'arn:aws:sns:us-east-1:480964559519:hiru'
}).promise()
    .then(data => {
        // your code goes here
    })
    .catch(err => {
        // error handling goes here
    });

